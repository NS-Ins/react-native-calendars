import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import styleConstructor from './style';
import {Theme} from '../../../types';

export interface DotProps {
  theme?: Theme;
  color?: string;
  marked?: boolean;
  selected?: boolean;
  disabled?: boolean;
  inactive?: boolean;
  today?: boolean;
  count?: string;
}

const Dot = ({theme, marked, disabled, inactive, color, today, selected, count}: DotProps) => {
  const style = styleConstructor(theme);
  const dotStyle = [style.dot] as object[];

  if (marked) {
    dotStyle.push(style.visibleDot);

    if (today) {
      dotStyle.push(style.todayDot);
    }

    if (disabled) {
      dotStyle.push(style.disabledDot);
    }

    if (inactive) {
      dotStyle.push(style.inactiveDot);
    }

    if (selected) {
      dotStyle.push(style.selectedDot);
    }

    if (color) {
      dotStyle.push({backgroundColor: color});
    }
  }

  console.log('COUNT ***** ', count)
  console.log('STYLE ***** ', style.dotContent)
  if (marked && count) {
    return (
      <View style={dotStyle}>
        <Text style={style.dotContent}>{count}</Text>
      </View>
    );
  }

  return <View style={dotStyle} />;
};

export default Dot;

Dot.propTypes = {
  theme: PropTypes.object,
  color: PropTypes.string,
  marked: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  inactive: PropTypes.bool,
  today: PropTypes.bool
};
