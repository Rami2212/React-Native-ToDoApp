import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { CompletedCheckboxProps } from '../types';

const CompletedCheckbox = ({
  completed,
  onPress,
  style,
}: CompletedCheckboxProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.checkbox,
        completed && styles.checkboxCompleted,
        style
      ]}
      onPress={onPress}
    >
      {completed && <View style={styles.checkmark} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // Checkbox
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },

  // Checkbox Completed
  checkboxCompleted: {
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    borderColor: COLORS.SECONDARY,
  },

  // Checkmark
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.SECONDARY,
  },
});

export default CompletedCheckbox;