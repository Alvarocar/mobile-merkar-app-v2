import styles from '@src/styles/scenes/history.styles';
import {ListItem} from '@react-native-material/core';
import {SafeAreaView, View} from 'react-native';
import MatIcon from 'react-native-vector-icons/AntDesign';
import {_screenContainer} from '@src/styles/_global.styles';

// The source object
const list = {
  currencyType: 'COP',
  description: 'Pan bimbo',
  imageUrl: 'https://..',
  name: 'Pan Bimbo',
  price: 7000,
  quantity: 5,
};

const HistoryItems = () => {
  return (
    /*  <SafeAreaView style={_screenContainer}> */
    <View
      style={{
        padding: 20,
        display: 'flex',
      }}>
      {list.map((l, i) => (
        <>
          <MatIcon name="right" style={styles.icon} size={12} color="black" />
          <ListItem
            key={i}
            title={l.currencyType}
            description={l.description}
            url={l.imageUrl}
            name={l.name}
            price={l.price}
            quantity={l.quantity}
          />
        </>
      ))}
    </View>
    /* </SafeAreaView> */
  );
};

export default HistoryItems;
