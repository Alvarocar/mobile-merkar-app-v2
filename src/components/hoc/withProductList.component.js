import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {
  selectProducts,
  selectProductSelected,
  SELECT_PRODUCT_BY_ID,
} from '@src/slice/product.reducer';
import {isEmpty} from 'lodash';
import {FlatList, Pressable, Text, View} from 'react-native';
import ProductRow from '@src/scenes/home/children/productRow.component';
import {Box} from '@react-native-material/core';
import styles from '@src/styles/hoc/withProductList.styles';
import {
  containerHeight,
  headerHeight,
} from '@src/styles/cards/_cardEmpty.styles';

export default WrappedComponent => {
  const WithProductList = ({products, selected, onSelected}) => {
    const ProductList = useMemo(() => {
      if (isEmpty(products)) return undefined;
      console.log(products);
      return (
        <Box
          style={{
            justifyContent: 'space-between',
            minHeight: containerHeight - headerHeight * 2.5,
          }}>
          <FlatList
            nestedScrollEnabled
            data={products}
            renderItem={({item}) => (
              <ProductRow
                selected={selected?.id ? selected.id : null}
                product={item}
                onPress={id => onSelected(id)}
              />
            )}
          />
          <View style={{alignItems: 'center'}}>
            <Pressable style={styles.finishButton}>
              <Text style={styles.finishText}>Finalizar Compra</Text>
            </Pressable>
          </View>
        </Box>
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
