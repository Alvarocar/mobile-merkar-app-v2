import {Text, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import {row} from '@src/styles/list/productRow.styles';
import {numberToMoney} from '@src/utils/number.util';
import {Box} from '@react-native-material/core';
const HistoryRow = ({products, total, date, order}) => {
  return (
    <List.Accordion
      style={[row.item]}
      title={
        <View style={{flexDirection: 'column'}}>
          <Text style={[row.title]}>{`Orden: #${order}`}</Text>
          <Text style={{color: 'black', opacity: 0.2}}>{date}</Text>
        </View>
      }
      right={() => (
        <Text style={{color: 'black'}}>{`Total: $${numberToMoney(
          total,
        )}`}</Text>
      )}>
      <Box ph={20} pb={10}>
        {products.map(p => (
          <Box
            key={p.id}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black'}}>{`${p.name}  x${p.quantity}`}</Text>
            <Text style={{color: 'black'}}>
              {numberToMoney(p.price * p.quantity)}
            </Text>
          </Box>
        ))}
      </Box>
    </List.Accordion>
  );
};

export default HistoryRow;
