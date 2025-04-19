import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { ActionButtonProps } from '../types';

const ActionButton = ({
  imageSource,
  onPress,
  style,
}: ActionButtonProps) => {
  return (
    <TouchableOpacity style={[styles.actionButton, style]} onPress={onPress}>
      <Image source={imageSource} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // ActionButton
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,
  },

  // Icon
  icon: {
    width: 16,
    height: 16,
  },
});

export default ActionButton;
