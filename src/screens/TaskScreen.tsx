// Libraries
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Keyboard } from 'react-native';
// Hooks & Constants
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';
// Components
import TaskList from '../components/TaskList';
import EmptyState from '../components/EmptyState';
import TaskInput from '../components/TaskInput';
import DeleteConfirmation from '../components/DeleteConfirmation';

const TaskScreen: React.FC = () => {
  const { tasks, activeTaskId, setActiveTask } = useTaskStore();
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleAddTask = (): void => {
    setShowAddTask(true);
  };

  const handleTaskPress = (taskId: string): void => {
    if (activeTaskId === taskId) {
      setActiveTask(null);
    } else {
      setActiveTask(taskId);
    }
  };

  const handleDeleteRequest = (taskId: string): void => {
      Keyboard.dismiss();
    setTaskToDelete(taskId);
    setShowDeleteConfirm(true);
  };

  const closeModal = (): void => {
    setShowAddTask(false);
    setShowDeleteConfirm(false);
    setTaskToDelete(null);
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <EmptyState onAddPress={handleAddTask} />
      ) : (
        <TaskList
          tasks={tasks}
          activeTaskId={activeTaskId}
          onTaskPress={handleTaskPress}
          onDeletePress={handleDeleteRequest}
        />
      )}

      <DeleteConfirmation
        visible={showDeleteConfirm}
        taskId={taskToDelete}
        onClose={closeModal}
      />
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