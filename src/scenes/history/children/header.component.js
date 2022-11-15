import {View, Text} from 'react-native';
import React from 'react';
import {header} from '@src/styles/scenes/history.styles';
import {_colors} from '@src/styles/_global.styles';
import {isUndefined} from 'lodash';
import {numberToMoney} from '@src/utils/number.util';

const Header = ({
  title = '',
  icon: Icon = undefined,
  iconName = '',
  subtitle,
}) => {
  return (
    <View style={[header.container]}>
      <Text style={[header.title]}>{title}</Text>
      <Text style={[header.subtitle]}>{subtitle}</Text>
      {!isUndefined(Icon) && (
        <Icon
          style={[header.icon]}
          name={iconName}
          color={_colors.black}
          size={240}
        />
      )}
    </View>
  );
};

export default Header;
