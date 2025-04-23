import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { DeleteButtonProps } from '../types';

const DeleteButton = ({
  onPress,
  style,
}: DeleteButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.deleteButton, style]}
      onPress={onPress}
    >
      <Text style={styles.deleteButtonText}>×</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // Delete Button
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 5,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.SECONDARY,
  },

  // Icon
  deleteButtonText: {
    fontSize: 22,
    color: COLORS.SECONDARY,
    fontWeight: '400',
    marginTop: -2,
  },
});

export default DeleteButton;