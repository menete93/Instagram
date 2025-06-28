import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../../assets/styles/scaling'

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: horizontalScale(10),
    width: '100%',
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 25,
  },
  userPostContainer: {
    marginTop: verticalScale(20),
    borderBottomWidth: 1,
    paddingBottom:  verticalScale(20),
    borderBottomColor: '#EFF2F6',
  },
  text: {
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: 'Inter_16pt-SemiBold',
    fontSize: scaleFontSize(12),
  },
  userpostState: {
    flexDirection: 'row',
    padding: horizontalScale(10),
  },
  userLike: {
    marginLeft: 1,
    color: '#79869F',
  },
  comments: {
    marginLeft: 1,
    color: '#79869F',
  },
  icon: {
    size: 20,
    color: '#79869F',
  },
});

export default style;
