import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';
import {Theme} from '../../../types';

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      marginHorizontal: 1,
      borderRadius: 2,
      opacity: 0,
      alignItems: 'center',
      justifyContent: 'center',
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    inactiveDot: {
      backgroundColor: appStyle.inactiveDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    dotContent: {
      color: appStyle.dotContentColor || '#fff'
    },
    // @ts-expect-error
    ...(theme['stylesheet.dot'] || {})
  });
}
