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
  iconContainer: {
    padding: 20,
    backgroundColor: '#23221F',
    borderRadius: 30,
  },
  icon: {
    width: 21,
    height: 21,
  },
});

export default SocialMediaIcon;
