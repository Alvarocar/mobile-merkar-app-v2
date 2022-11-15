import {StyleSheet} from 'react-native';
import {dimensions, _colors} from '../_global.styles';

export const row = StyleSheet.create({
  item: {
    backgroundColor: _colors.white,
  },
  title: {
    color: _colors.black,
    fontWeight: 'bold',
  },
});
