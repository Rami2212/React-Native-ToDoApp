import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { SocialMediaIconProps } from '../types';


const SocialMediaIcon = ({
    imageSource,
    onPress
}: SocialMediaIconProps) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // Icon Container
  iconContainer: {
    padding: 20,
    backgroundColor: '#23221F',
    borderRadius: 30,
  },

  // Icon
  icon: {
    width: 21,
    height: 21,
  },
});

export default SocialMediaIcon;
