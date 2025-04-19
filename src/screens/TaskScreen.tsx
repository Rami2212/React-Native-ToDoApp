// Libraries
import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
// Hooks & Constants
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';
// Components
import TaskList from '../components/TaskList';
import EmptyState from '../components/EmptyState';
import TaskInput from '../components/TaskInput';
import DeleteConfirmation from '../components/DeleteConfirmation';
import EditTaskModal from '../components/EditTaskModal';
import ShareTaskModal from '../components/ShareTaskModal';
import { Task } from '../types';

const TaskScreen = () => {
  const { tasks, activeTaskId, setActiveTask, updateTask } = useTaskStore();

  //const [showAddTask, setShowAddTask] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showShareTaskModal, setShowShareTaskModal] = useState(false);

  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToShare, setTaskToShare] = useState(null);

//   const handleAddTask = () => {
//     setShowAddTask(true);
//   };

  const handleTaskPress = (taskId: string) => {
    if (activeTaskId === taskId) {
      setActiveTask(null);
    } else {
      setActiveTask(taskId);
    }
  };

  const handleDeleteRequest = (taskId: string) => {
    Keyboard.dismiss();
    setTaskToDelete(taskId);
    setShowDeleteConfirm(true);
  };

  const handleEditRequest = (taskId: string) => {
    Keyboard.dismiss();
    const task = tasks.find(t => t.id === taskId);
    setTaskToEdit(taskId);
    setShowEditTaskModal(true);
  };

  const handleShareRequest = (taskId: string) => {
      Keyboard.dismiss();
      const task = tasks.find(t => t.id === taskId);
      setTaskToShare(taskId);
      setShowShareTaskModal(true);
    };

  const handleSaveTask = (updatedTask: Task) => {
    updateTask(updatedTask.id, updatedTask);
  };

  const closeModal = () => {
    //setShowAddTask(false);
    setShowDeleteConfirm(false);
    setTaskToDelete(null);
    setShowEditTaskModal(false);
    setTaskToEdit(null);
  };

  return (
    <View style={styles.container}>
      <TaskInput  />
      {tasks.length === 0 ? (
        <EmptyState  />
      ) : (
        <TaskList
          tasks={tasks}
          activeTaskId={activeTaskId}
          onTaskPress={handleTaskPress}
          onDeletePress={handleDeleteRequest}
          onEditPress={handleEditRequest}
          onSharePress={handleShareRequest}
        />
      )}

      <DeleteConfirmation
        visible={showDeleteConfirm}
        taskId={taskToDelete}
        onClose={closeModal}
      />

      <EditTaskModal
        visible={showEditTaskModal}
        taskId={taskToEdit}
        onClose={closeModal}
//         onSave={handleSaveTask}
      />

      <ShareTaskModal
        visible={showShareTaskModal}
        taskId={taskToShare}
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