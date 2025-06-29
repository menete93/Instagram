import { StyleSheet } from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../../assets/styles/scaling'


const style = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    fontWeight: 'bold',
    color: '#022150',
    alignSelf: 'flex-start',
    marginTop: verticalScale(-30),
    marginLeft: verticalScale(-15),
  },
  container: {
    padding: horizontalScale(10),
    alignItems: 'center',
    marginLeft: verticalScale(27),
    marginRight: verticalScale(17),
    marginTop: verticalScale(25),
  },
name: {
  fontSize: scaleFontSize(14),
  fontFamily: 'Inter_18pt-SemiBold',
  color: '#022150',
},
view:{
  width: 70,
   alignItems: 'center',
    marginRight: horizontalScale(10),
},
image:{
  width: 60,
  height: 60,
  borderRadius: 30,
  marginTop:verticalScale(1),
},
userImageContainer:{
  borderColor:'#F35BAC',
  borderWidth:2,
  padding:horizontalScale(3),
  borderRadius:50,


},
});

export default style;
