import {StyleSheet} from 'react-native';
import {dimensions, _colors} from '../_global.styles';

const button = StyleSheet.flatten({
  base: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default StyleSheet.create({
  mask: {
    backgroundColor: 'black',
    height: dimensions.fullHeight,
    opacity: 0.9,
    zIndex: -1,
  },
  productContainer: {
    position: 'absolute',
    width: dimensions.fullWidth,
    paddingHorizontal: 30,
    marginVertical: 'auto',
  },
  container: {
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footer: {
    width: dimensions.fullWidth,
    display: 'flex',
    flexDirection: 'row',
  },
  add: {
    backgroundColor: _colors.blue,
    marginRight: 10,
    ...button.base,
  },
  cancel: {
    backgroundColor: _colors.grey,
    ...button.base,
  },
  text: {
    color: _colors.black,
    fontWeight: '600',
  },
});
