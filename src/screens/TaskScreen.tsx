// Libraries
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

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

      <TaskInput

      />

      {tasks.length === 0 ? (
        <EmptyState onAddPress={handleAddTask} />
      ) : (
        <ScrollView>
          <TaskList
            tasks={tasks}
            activeTaskId={activeTaskId}
            onTaskPress={handleTaskPress}
            onDeletePress={handleDeleteRequest}
          />
        </ScrollView>
      )}



      <DeleteConfirmation
        visible={showDeleteConfirm}
        taskId={taskToDelete}
        onClose={() => setShowDeleteConfirm(false)}
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



