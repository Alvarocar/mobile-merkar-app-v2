import {ListItem} from '@react-native-material/core';
import {View} from 'react-native';

const list = [
  {
    title: 'Orden: #78131',
    subtitle: '10/08/2022',
    price: 60000,
  },
  {
    title: 'Orden: #78130',
    subtitle: '10/08/2022',
    price: 60000,
  },
];

const HistoryItems = () => {
  return (
    <View style={{
        padding: 20, 
    }}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          title={l.title}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))}
    </View>
  );
};

export default HistoryItems;
