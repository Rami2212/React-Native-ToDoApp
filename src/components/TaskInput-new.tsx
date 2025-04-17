import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text
} from 'react-native';
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';
import { GLOBAL_STYLES } from '../constants/styles';

interface TaskInputProps {
  visible: boolean;
  onClose: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ visible, onClose }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { addTask } = useTaskStore();

  const handleSubmit = (): void => {
    if (title.trim()) {
      addTask({
        title: title.trim(),
        description: description.trim()
      });
      resetForm();
      onClose();
    }
  };

  const resetForm = (): void => {
    setTitle('');
    setDescription('');
  };

  const handleCancel = (): void => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Task</Text>

          <TextInput
            style={GLOBAL_STYLES.input}
            placeholder="Title..."
            placeholderTextColor={COLORS.TEXT_SECONDARY}
            value={title}
            onChangeText={setTitle}
            maxLength={50}
          />

          <TextInput
            style={[GLOBAL_STYLES.input, styles.textArea]}
            placeholder="About..."
            placeholderTextColor={COLORS.TEXT_SECONDARY}
            value={description}
            onChangeText={setDescription}
            multiline
            maxLength={200}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSubmit}
              disabled={!title.trim()}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    backgroundColor: COLORS.SURFACE,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 16,
    textAlign: 'center',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: COLORS.SURFACE,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,
  },
  saveButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },
});

export default TaskInput;
