import {Box} from '@react-native-material/core';
import CardScreen from '@src/components/cards/cardScreen.component';
import {_screenContainer} from '@src/styles/_global.styles';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HistoryHeader from './children/historyHeader.component';
import HistoryItems from './children/historyItems.component';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={_screenContainer}>
      <CardScreen header={<HistoryHeader />}>
        {/* Contenido JSX */}
        <HistoryItems />
      </CardScreen>
    </SafeAreaView>
  );
};

export default HistoryScreen;
