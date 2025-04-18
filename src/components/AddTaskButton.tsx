import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { AddTaskButtonProps } from '../types';

const AddTaskButton = ({
  onPress,
  style,
}: AddTaskButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.addButton, style]}
      onPress={onPress}
    >
      <Text style={styles.plusIcon}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 44,
    color: COLORS.PRIMARY,
    fontWeight: '300',
    marginTop: -5,
  }
});

export default AddTaskButton;