import CardScreen from '@src/components/cards/cardScreen.component';
import {_screenContainer} from '@src/styles/_global.styles';
import {SafeAreaView} from 'react-native';
import Header from './children/header.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryList from './children/historyList.component';

const History = () => {
  return (
    <SafeAreaView style={_screenContainer}>
      <CardScreen
        header={
          <Header title="Mis Órdenes" icon={Icon} iconName="timelapse" />
        }>
        <HistoryList />
      </CardScreen>
    </SafeAreaView>
  );
};

export default History;
