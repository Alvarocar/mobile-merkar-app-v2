import {StyleSheet} from 'react-native';
import {dimensions, _colors} from '../_global.styles';

export default StyleSheet.create({
  product: {
    backgroundColor: _colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    height: 300,
  },
  title: {
    color: _colors.black,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  description: {
    color: _colors.black,
    opacity: 0.6,
  },
  price: {
    color: _colors.black,
    fontSize: 18,
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 150,
  },
  action: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  plus: {
    backgroundColor: _colors.blue,
  },
  minus: {
    backgroundColor: _colors.red,
  },
  countSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  counter: {
    color: _colors.black,
    width: 50,
    textAlign: 'center',
  },
});
