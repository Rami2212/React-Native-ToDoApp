import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { CustomInputProps } from '../types';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  multiline = false,
  style,
  inputStyle,
  maxLength,
  placeholderTextColor = COLORS.TEXT_SECONDARY,
}: CustomInputProps) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={[styles.inputField, multiline && styles.multilineInput, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  // Input Container
  inputContainer: {
    width: '100%',
  },

  // Input Field
  inputField: {
    height: 32,
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 4,
    padding: 8,
    color: COLORS.TEXT_PRIMARY_LOW_OPACITY,
    fontSize: 14,
    fontFamily: 'Roboto-VariableFont',
  },

  // Multiline Input
  multilineInput: {
    minHeight: 343,
    textAlignVertical: 'top',
  },
});

export default CustomInput;