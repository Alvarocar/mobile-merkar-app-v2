import {
  CLEAN_DETAIL,
  SAVE_IN_PRODUCT_LIST,
  selectIsProductInCart,
  selectProductDetail,
  selectProducts,
} from '@src/slice/product.reducer';
import {isNull, isUndefined} from 'lodash';
import PropTypes from 'prop-types';
import {useCallback, useMemo, useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import ProductDetail from '../cards/productDetail.component';
import styles from '@src/styles/hoc/withProductDetail.styles';

export default WrappedComponent => {
  const WithProductDetail = ({
    product,
    onClean,
    saveProduct,
    allProducts,
    ...props
  }) => {
    const save = useCallback(
      data => {
        saveProduct(data);
        onClean();
      },
      [saveProduct, onClean],
    );

    const Footer = useCallback(
      ({product, quantity}) => {
        return (
          <View style={styles.footer}>
            <Pressable style={styles.add}>
              <Text
                style={styles.text}
                onPress={() => save({...product, quantity})}>
                Agregar
              </Text>
            </Pressable>
            <Pressable style={styles.cancel} onPress={onClean}>
              <Text style={styles.text}>Cancelar</Text>
            </Pressable>
          </View>
        );
      },
      [saveProduct, onClean],
    );

    const ProductView = useMemo(() => {
      if (isNull(product)) {
        return <></>;
      }
      const productInfo = allProducts.find(p => p.id === product.id);
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
                initialCount={
                  isUndefined(productInfo) ? 1 : productInfo.quantity
                }
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
    allProducts: selectProducts(state),
  });

  const mapDispatchToProps = dispatch => ({
    onClean: () => dispatch(CLEAN_DETAIL()),
    saveProduct: product => dispatch(SAVE_IN_PRODUCT_LIST(product)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithProductDetail);
};
