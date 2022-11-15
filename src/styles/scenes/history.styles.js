import {StyleSheet} from 'react-native';
import {headerHeight} from '../cards/_cardEmpty.styles';
import {_colors} from '../_global.styles';

export const header = StyleSheet.create({
  container: {
    height: headerHeight,
    padding: 50,
    paddingRight: 0,
    paddingBottom: 0,
    overflow: 'hidden',
  },
  title: {
    color: _colors.black,
    fontSize: 25,
    fontWeight: '900',
  },
  icon: {
    position: 'absolute',
    right: -50,
    top: 0,
  },
  subtitle: {
    color: _colors.black,
    fontSize: 15,
  },
});
