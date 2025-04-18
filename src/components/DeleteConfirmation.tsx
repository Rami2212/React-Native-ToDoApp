import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';
import CustomButton from '../components/CustomButton';
import { DeleteConfirmationProps } from '../types';

const DeleteConfirmation = ({
  visible,
  taskId,
  onClose
}: DeleteConfirmationProps) => {
  const { deleteTask } = useTaskStore();

  const handleConfirm = (): void => {
    if (taskId) {
      deleteTask(taskId);
    }
    onClose();
  };

  const handleCancel = (): void => {
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
          <Text style={styles.title}>Delete this task?</Text>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Yes"
              onPress={handleConfirm}
            />
            <CustomButton
              title="No"
              onPress={handleCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_OVERLAY,
  },

  // Modal Container
  modalContent: {
    width: '75%',
    height: 143,
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 4,
    padding: 0,
    alignItems: 'center',
    borderTopWidth: 4,
    borderTopColor: COLORS.SECONDARY,
  },

  // Title
  title: {
    fontFamily: 'Roboto-VariableFont',
    fontWeight: 400,
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    top: 37,
  },

  // Button Container
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    top: 68,
    },
});

export default DeleteConfirmation;