import React from 'react';
import style from './style';
import { Image, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profiletabContentContainer}
    >
      <View style={style.profileTabContent}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../../assets/images/default_post.jpg')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../../assets/images/default_post.jpg')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../../assets/images/default_post.jpg')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../../assets/images/default_post.jpg')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
