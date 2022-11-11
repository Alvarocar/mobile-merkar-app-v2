import {
  CLEAN_DETAIL,
  SAVE_IN_PRODUCT_LIST,
  selectProductDetail,
} from '@src/slice/product.reducer';
import {isNull} from 'lodash';
import PropTypes from 'prop-types';
import {useCallback, useMemo} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import ProductDetail from '../cards/productDetail.component';
import styles from '@src/styles/hoc/withProductDetail.styles';

export default WrappedComponent => {
  const WithProductDetail = ({product, onClean, saveProduct, ...props}) => {
    const Footer = useCallback(() => {
      return (
        <View style={styles.footer}>
          <Pressable style={styles.add}>
            <Text style={styles.text} onPress={() => saveProduct(product)}>
              Agregar
            </Text>
          </Pressable>
          <Pressable style={styles.cancel} onPress={onClean}>
            <Text style={styles.text}>Cancelar</Text>
          </Pressable>
        </View>
      );
    });

    const ProductView = useMemo(() => {
      if (isNull(product)) {
        return <></>;
      }
      return (
        <Modal
          visible
          transparent
          onTouchCancel={onClean}
          onRequestClose={onClean}>
          <View style={styles.container}>
            <Pressable onPress={onClean} style={styles.mask} />
            <View style={styles.productContainer}>
              <ProductDetail
                styleContainer={styles.card}
                product={product}
                onPressMask={onClean}
                footer={Footer}
              />
            </View>
          </View>
        </Modal>
      );
    }, [product]);

    return (
      <>
        {ProductView}
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
    saveProduct: product => dispatch(SAVE_IN_PRODUCT_LIST(product)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithProductDetail);
};
