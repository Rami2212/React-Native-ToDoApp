import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useTaskStore from '../hooks/useTaskStore';

import TaskHeader from '../components/TaskHeader';
import TaskList from '../components/TaskList';
import EmptyState from '../components/EmptyState';
import TaskInput from '../components/TaskInput';
import DeleteConfirmation from '../components/DeleteConfirmation';
import { COLORS } from '../constants/colors';

const TaskScreen: React.FC = () => {
  const { tasks, activeTaskId, setActiveTask } = useTaskStore();
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleAddTask = (): void => {
    setShowAddTask(true);
  };

  const handleTaskPress = (taskId: string): void => {
    setActiveTask(taskId);
  };

  const handleDeleteRequest = (taskId: string): void => {
    setTaskToDelete(taskId);
    setShowDeleteConfirm(true);
  };

  const closeModal = (): void => {
    setShowAddTask(false);
  };

  return (
    <View style={styles.container}>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 22,
    paddingVertical: 23,
  },
});

export default TaskScreen;
