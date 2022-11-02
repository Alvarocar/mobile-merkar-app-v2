import {CLEAN_DETAIL, selectProductDetail} from '@src/slice/product.reducer';
import {isNull, stubTrue} from 'lodash';
import PropTypes from 'prop-types';
import {useCallback, useMemo, useState} from 'react';
import {Button, Image, Modal, Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '@src/styles/cards/productDetail.styles';

export default WrappedComponent => {
  const WithProductDetail = ({product, onClean, ...props}) => {
    const ProductDetail = useMemo(() => {
      if (isNull(product)) {
        return <></>;
      }
      return (
        <Modal
          visible
          transparent
          onTouchCancel={onClean}
          onRequestClose={onClean}>
          <ProductView product={product} onPressMask={onClean} />
        </Modal>
      );
    }, [product]);
    return (
      <>
        {ProductDetail}
        <WrappedComponent {...props} />
      </>
    );
  };

  WithProductDetail.propTypes = {
    product: PropTypes.shape({
      currencyType: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  };

  const mapStateToProps = state => ({
    product: selectProductDetail(state),
  });

  const mapDispatchToProps = dispatch => ({
    onClean: () => dispatch(CLEAN_DETAIL()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithProductDetail);
};

const ProductView = ({product, onPressMask = stubTrue}) => {
  const [ counter, setCounter ] = useState(1)
  const increment = useCallback(() => {
    setCounter(c => c + 1)
  }, [setCounter]) 
  const decrement = useCallback(() => {
    setCounter(c => {
      if (c <= 1) return c
      return c - 1
    })
  }, [setCounter]) 

  const totalPrice = useMemo(() => product.price * counter, [product.price, counter])

  return (
  <>
    <View style={styles.mask}></View>
    <View style={styles.productContainer}>
      <View style={styles.product}>
        <View style={styles.left}>
          <Text style={styles.title}> {product.name} </Text>
          <Image style={styles.image} source={{uri: product.imageUrl}} />
        </View>
        <View style={styles.right}>
          <Text style={styles.price}>{`Precio Total: $${totalPrice}`}</Text>
          <Text style={styles.description}> {product.description} </Text>
          <View style={styles.countSection}>
            <Button style={styles.action} title='-' onPress={decrement}/>
            <Text style={styles.counter}>{ counter }</Text>
            <Button style={styles.action} title='+' onPress={increment}/>
          </View>
          <Text style={styles.description}>{`Precio unitario: $${product.price}`}</Text>
          <Button title='Cerrar' onPress={onPressMask}/>
        </View>
      </View>
    </View>
  </>
)
};

ProductView.propTypes = {
  product: PropTypes.shape({
    currencyType: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  onPressMask: PropTypes.func,
};
