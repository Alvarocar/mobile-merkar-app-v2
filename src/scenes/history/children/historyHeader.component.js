import {_headerMerkar} from '@src/styles/header/_header.style';
import {Text, View} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const HistoryHeader = () => {
  return (
    <>
      <Text
        style={{
          color: 'black',
          position: 'absolute',
          left: '10%',
          top: '30%',
          fontSize: 24,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
        }}>
        Mis órdenes
      </Text>
      <View>
        <MatIcon name="timelapse" style={_headerMerkar.icon} />
      </View>
    </>
  );
};

export default HistoryHeader;
