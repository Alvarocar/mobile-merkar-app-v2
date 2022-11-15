import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {
  DROP_PRODUCT_LIST,
  selectProducts,
  selectProductSelected,
  selectTotal,
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
import {SAVE_NEW_HISTORY} from '@src/slice/history.reducer';

export default WrappedComponent => {
  const WithProductList = ({
    products,
    selected,
    onSelected,
    onSaveHistory,
    onClean,
    total,
  }) => {
    const ProductList = useMemo(() => {
      if (isEmpty(products)) return undefined;
      console.log(products);
      return (
        <Box
          style={{
            justifyContent: 'space-between',
            height: containerHeight - headerHeight - 20,
          }}>
          <FlatList
            nestedScrollEnabled
            data={products}
            style={{
              height: containerHeight - headerHeight - 20,
            }}
            renderItem={({item}) => (
              <ProductRow
                selected={selected?.id ? selected.id : null}
                product={item}
                onPress={id => onSelected(id)}
              />
            )}
          />
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <Pressable
              style={styles.finishButton}
              onPress={() => {
                onSaveHistory({products, total});
                onClean();
              }}>
              <Text style={styles.finishText}>Finalizar Compra</Text>
            </Pressable>
          </View>
        </Box>
      );
    }, [products, selected, onSelected, total]);

    return <WrappedComponent productList={ProductList} />;
  };

  WithProductList.propTypes = {};

  const mapStateToProps = state => ({
    products: selectProducts(state),
    selected: selectProductSelected(state),
    total: selectTotal(state),
  });

  const mapDispatchToProps = dispatch => ({
    onSelected: id => dispatch(SELECT_PRODUCT_BY_ID(id)),
    onSaveHistory: products => dispatch(SAVE_NEW_HISTORY(products)),
    onClean: () => dispatch(DROP_PRODUCT_LIST()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithProductList);
};
