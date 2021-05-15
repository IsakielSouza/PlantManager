import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlightProps,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableHighlightProps {
  title: string;
}

export function Button({title, ...rest } : ButtonProps) {
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
      >

      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text:{
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.white,

  }
})