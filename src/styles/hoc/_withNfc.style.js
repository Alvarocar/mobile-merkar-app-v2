import {StyleSheet} from 'react-native';
import {_colors, dimensions} from '../_global.styles';

const radioButton = 50;

export default StyleSheet.create({
  action: {
    position: 'absolute',
    right: 30,
    bottom: 50,
    width: radioButton,
    height: radioButton,
    backgroundColor: _colors.tertiary,
    borderRadius: radioButton / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
  },
  modal: {
    height: dimensions.fullHeight * 0.4,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: _colors.white,
  },
  modalMask: {
    backgroundColor: 'black',
    height: '100%',
    opacity: 0.8,
    position: 'relative',
    elevation: 1,
  },
  modalImageSection: {
    marginHorizontal: 'auto',
    elevation: 5,
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  modalTitleSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: _colors.black,
    opacity: 0.6,
  },
  modalTitleNotEnabledSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
});
