import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, Pressable} from 'react-native';
import {row} from '@src/styles/list/productRow.styles';
import {IconButton, List, MD3Colors} from 'react-native-paper';
import {Image} from 'react-native';
import ProductDetail from '@src/components/cards/productDetail.component';
import {connect} from 'react-redux';
import {SAVE_IN_PRODUCT_LIST} from '@src/slice/product.reducer';
import {_colors} from '@src/styles/_global.styles';
import {stubTrue} from 'lodash';

const LeftIcon = ({product, isOpen}) => {
  if (isOpen) return <></>;
  return <Image source={{uri: product.imageUrl, width: 40, height: 40}} />;
};

const RightContent = ({product, isExpanded}) => {
  if (isExpanded) return <Icon name="down" size={20} color="black" />;
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}>{product.price}</Text>
      <Icon style={{marginLeft: 10}} name="right" size={20} color="black" />
    </View>
  );
};

const ButtonToDelete = () => {
  return (
    <Pressable
      style={{
        width: 50,
        height: 50,
        backgroundColor: _colors.tertiary,
        position: 'absolute',
        right: 20,
        bottom: 10,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <IconButton icon="trash-can" iconColor={_colors.white} />
    </Pressable>
  );
};

//alvaro
const ProductRow = ({product, selected, save, onPress = stubTrue}) => {
  const isOpen = useMemo(() => product.id === selected, [selected, product]);
  const saveItem = useCallback(
    quantity => {
      save({...product, quantity});
    },
    [save, product],
  );
  return (
    <List.Accordion
      style={[row.item]}
      titleStyle={[row.title]}
      title={`${product.name} (${product.quantity})`}
      left={props => <LeftIcon {...props} product={product} isOpen={isOpen} />}
      expanded={isOpen}
      right={props => (
        <RightContent {...props} product={product} isOpen={isOpen} />
      )}
      onPress={() => {
        if (isOpen) {
          onPress(undefined);
        } else {
          onPress(product.id);
        }
      }}>
      <ProductDetail
        title={false}
        product={product}
        suscribe={saveItem}
        initialCount={product.quantity}
        stylesRight={{height: 150}}
        footer={ButtonToDelete}
        styleCount={{justifyContent: 'flex-start'}}
      />
    </List.Accordion>
  );
};

ProductRow.propTypes = {
  product: PropTypes.shape({
    currencyType: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
  save: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  save: product => dispatch(SAVE_IN_PRODUCT_LIST(product)),
});

export default connect(null, mapDispatchToProps)(ProductRow);
