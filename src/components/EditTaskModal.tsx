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
  task,
  onClose,
}: EditTaskModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setBody(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (!task) return;

    taskStore.getState().updateTask(task.id, {
      title,
      description,
    });

    onClose();
  };

  const handleCancel = () => {
    onClose();
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
