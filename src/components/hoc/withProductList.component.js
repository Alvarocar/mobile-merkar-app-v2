import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  selectProducts,
  selectProductSelected,
  SELECT_PRODUCT_BY_ID,
} from '@src/slice/product.reducer';
import {isEmpty} from 'lodash';
import {FlatList} from 'react-native';
import ProductRow from '@src/scenes/home/children/productRow.component';

export default WrappedComponent => {
  const WithProductList = ({products, selected, onSelected}) => {
    const ProductList = useMemo(() => {
      if (isEmpty(products)) return undefined;
      return (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductRow
              selected={selected?.id ? selected.id : null}
              product={item}
              onPress={id => onSelected(id)}
            />
          )}
        />
      );
    }, [products, selected, onSelected]);

    return <WrappedComponent productList={ProductList} />;
  };

  WithProductList.propTypes = {};

  const mapStateToProps = state => ({
    products: selectProducts(state),
    selected: selectProductSelected(state),
  });

  const mapDispatchToProps = dipatch => ({
    onSelected: id => dipatch(SELECT_PRODUCT_BY_ID(id)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithProductList);
};
