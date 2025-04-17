import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { GLOBAL_STYLES } from '../constants/styles';
import AddTaskButton from './AddTaskButton';

interface EmptyStateProps {
  onAddPress: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyIndicator} />
      <Text style={styles.title}>No tasks</Text>
      <View style={styles.emptyIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({

  //Container
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 72,
  },

  //Title
  title: {
    fontSize: 24,
    fontFamily: 'Inter-VariableFont',
    fontWeight: 400,
    color: COLORS.TEXT_SECONDARY,
    marginTop: 12,
    marginBottom: 12,
  },

  //Line
  emptyIndicator: {
    width: 64,
    height: 3,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 2,
  },
});

export default EmptyState;