import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Modal,
} from 'react-native';
import { COLORS } from '../constants/colors';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { EditTaskModalProps } from '../types';
import { taskStore } from '../store/taskStore';

const EditTaskModal = ({
  visible,
  taskId,
  onClose,
}: EditTaskModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskId) {
      setTitle(taskId.title);
      setDescription(taskId.description);
    }
  }, [taskId]);

  const handleSave = () => {
    if (!taskId) return;

    const currentTasks = taskStore.getState().tasks;
    const taskToUpdate = currentTasks.find(task => task.id === taskId);

    if (!taskToUpdate) {
      console.log('Task not found');
      return;
    }

    const updates: Partial<typeof taskToUpdate> = {};

    if ((title ?? '').trim() !== '') {
      updates.title = title.trim();
    }

    if ((description ?? '').trim() !== '') {
      updates.description = description.trim();
    }

    if (Object.keys(updates).length === 0) {
      console.log('Nothing to update');
      return;
    }

    taskStore.getState().updateTask(taskId, updates);

    resetForm();
    onClose();
  };


  const handleCancel = () => {
    onClose();
  };

  const resetForm = (): void => {
    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <CustomInput
            placeholder="Mini Input..."
            value={title}
            onChangeText={setTitle}
            maxLength={50}
          />

          <CustomInput
            placeholder="Max Input..."
            value={description}
            onChangeText={setDescription}
            multiline={true}
            style={styles.bodyInput}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Cancel"
              onPress={handleCancel}
              style={styles.cancelButton}
            />
            <CustomButton
              title="Save"
              onPress={handleSave}
              style={styles.saveButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

  // Container
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.BACKGROUND_OVERLAY,
  },

  // Modal Container
  modalContent: {
    width: '90%',
    height: 451,
    backgroundColor: COLORS.BACKGROUND,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 18,
    bottom: 0,
  },

  // Input
  bodyInput: {
    height: 343,
    top: 8,
  },

  // Button Container
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    top: 16,
  },
});

export default EditTaskModal;
