import CardScreen from '@src/components/cards/cardScreen.component';
import withProductDetail from '@src/components/hoc/withProductDetail.component';
import {_screenContainer} from '@src/styles/_global.styles';
import WithNfc from '@src/utils/hoc/withNfc.util';
import {SafeAreaView} from 'react-native';
import {compose} from 'redux';
import MainHeader from './children/mainHeader.component';
import NfcBody from './children/nfcBody.component';

const HomeScreen = () => {
  return (
    <SafeAreaView style={_screenContainer}>
      <CardScreen header={<MainHeader />}>
        <NfcBody />
      </CardScreen>
    </SafeAreaView>
  );
};

export default compose(WithNfc, withProductDetail)(HomeScreen);
