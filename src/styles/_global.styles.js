import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const _colors  = {
  primary: '#E0B678',
  secondary: '#176368',
  tertiary: '#991E69',
  white: '#FFFFFF',
  red: '#C11919',
  blue: '#1166AA',
  grey: '#969696',
  black: '#212121',

}

export const _padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const _fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Roboto'
}

export const _borderRadius = {
  sm: 10,
  md: 20,
  lg: 50,
}

export const _footer = {
  height: 60,
}

export const _screenContainer = {
  backgroundColor: _colors.secondary,
  width: dimensions.fullWidth,
  height: dimensions.fullHeight,
  padding: _padding.sm,
  paddingBottom: _padding.xl,
}