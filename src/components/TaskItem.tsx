import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';
import { TaskItemProps } from '../types';
import DeleteButton from './DeleteButton';
import CompletedCheckbox from './CompletedCheckbox';

const TaskItem = ({
  task,
  isActive,
  onPress,
  onDelete
}: TaskItemProps) => {
  const { toggleComplete } = useTaskStore();

  const handleToggleComplete = (e: any): void => {
    e.stopPropagation();
    toggleComplete(task.id);
  };

  const handleDelete = (e: any): void => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.card,
        isActive && styles.activeTask,
        task.completed && styles.completedTask
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentContainer}>
        {/* Checkbox Container */}
        <View style={styles.checkboxContainer}>
          <CompletedCheckbox
            completed={task.completed}
            onPress={handleToggleComplete}
          />
        </View>
        {/* Text Container */}
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              task.completed && styles.completedText
            ]}
            numberOfLines={1}
          >
            {task.title}
          </Text>
          {task.description ? (
            <Text
              style={[
                styles.description,
                task.completed && styles.completedText
              ]}
              numberOfLines={1}
            >
              {task.description}
            </Text>
          ) : null}
        </View>
      </View>
      {/* Delete Button */}
      <DeleteButton onPress={handleDelete} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Container
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  // Card
  card: {
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    height: 72,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: COLORS.SECONDARY,
    gap: 16,
  },
  // Active Task
  activeTask: {
    borderWidth: 2,
  },
  // Completed Task
  completedTask: {
    opacity: 0.7,
  },
  // Content Container
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Checkbox Container
  checkboxContainer: {
    marginRight: 16,
  },
  // Text Container
  textContainer: {
    flex: 1,
  },
  // Title
  title: {
    fontSize: 22,
    fontFamily: 'Roboto-VariableFont',
    fontWeight: '500',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  // Description
  description: {
    fontSize: 14,
    fontFamily: 'Roboto-VariableFont',
    fontWeight: '400',
    color: COLORS.TEXT_PRIMARY,
  },
  // Task Completed Text
  completedText: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
});

export default TaskItem;