import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { CustomButtonProps } from '../types';

const CustomButton = ({
  title,
  onPress,
  style,
  textStyle
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Button
  button: {
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    paddingVertical: 4,
    borderRadius: 4,
    width: 64,
    height: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,
    marginHorizontal: 5,
  },

  // Text
  buttonText: {
    fontFamily: 'Roboto-VariableFont',
    fontWeight: 400,
    fontSize: 10,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: 400,
  },
});

export default CustomButton;