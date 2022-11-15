import CardScreen from '@src/components/cards/cardScreen.component';
import withProductDetail from '@src/components/hoc/withProductDetail.component';
import withProductList from '@src/components/hoc/withProductList.component';
import {_screenContainer} from '@src/styles/_global.styles';
import WithNfc from '@src/utils/hoc/withNfc.util';
import {isUndefined} from 'lodash';
import {SafeAreaView} from 'react-native';
import {compose} from 'redux';
import MainHeader from './children/mainHeader.component';
import NfcBody from './children/nfcBody.component';

const HomeScreen = ({productList: ProductList}) => {
  return (
    <SafeAreaView style={_screenContainer}>
      <CardScreen header={<MainHeader />}>
        {isUndefined(ProductList) ? <NfcBody /> : ProductList}
        {/*         <ProductRow
          product={{
            name: 'hola',
            price: 15,
            quantity: 10,
            imageUrl:
              'https://cdn.miaguila.com/images/alkosto/7702511000038.jpg',
            id: 1,
          }}
          selected={1}
        /> */}
      </CardScreen>
    </SafeAreaView>
  );
};

export default compose(WithNfc, withProductDetail, withProductList)(HomeScreen);
