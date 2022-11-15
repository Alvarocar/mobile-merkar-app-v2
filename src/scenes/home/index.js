import CardScreen from '@src/components/cards/cardScreen.component';
import withProductDetail from '@src/components/hoc/withProductDetail.component';
import withProductList from '@src/components/hoc/withProductList.component';
import {_screenContainer} from '@src/styles/_global.styles';
import WithNfc from '@src/utils/hoc/withNfc.util';
import {isUndefined} from 'lodash';
import {SafeAreaView} from 'react-native';
import {compose} from 'redux';
import Header from '../history/children/header.component';
import MainHeader from './children/mainHeader.component';
import NfcBody from './children/nfcBody.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {selectTotal} from '@src/slice/product.reducer';
import {connect} from 'react-redux';
import {numberToMoney} from '@src/utils/number.util';

const HomeScreen = ({productList: ProductList, total}) => {
  return (
    <SafeAreaView style={_screenContainer}>
      <CardScreen
        header={
          isUndefined(ProductList) ? (
            <MainHeader />
          ) : (
            <Header
              title="Mi carrito"
              icon={Icon}
              iconName="cart-variant"
              subtitle={`Total: $${numberToMoney(total)}`}
            />
          )
        }>
        {isUndefined(ProductList) ? <NfcBody /> : ProductList}
      </CardScreen>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  total: selectTotal(state),
});

export default compose(
  WithNfc,
  withProductDetail,
  withProductList,
  connect(mapStateToProps),
)(HomeScreen);
