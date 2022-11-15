import {StyleSheet} from 'react-native';
import {_colors} from '../_global.styles';

export default StyleSheet.create({
  finishButton: {
    width: 200,
    paddingVertical: 10,
    backgroundColor: _colors.red,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  finishText: {
    color: _colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
