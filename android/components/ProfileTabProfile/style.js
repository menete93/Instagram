import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize } from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: 'Inter_28pt-Light',
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: 'Inter_18pt-ExtraBold',
  },
});

export default style;
