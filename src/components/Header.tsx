import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/Isakiel.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  return(
    <View style = {styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Isakiel</Text>
      </View>
        <Image
          source={userImg}
          style={styles.image}
        />
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image:{
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
})