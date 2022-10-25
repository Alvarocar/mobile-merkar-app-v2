import {StyleSheet} from 'react-native';
import {dimensions, _colors} from '../_global.styles';

export default StyleSheet.create({
  mask: {
    backgroundColor: _colors.black,
    opacity: 0.8,
    height: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
  },
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
  right: {flex: 2},
  description: {
    color: _colors.black,
    opacity: 0.6,
  },
  price: {
    color: _colors.black,
    fontSize: 18,
    opacity: 0.9,
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 150,
  },
});
