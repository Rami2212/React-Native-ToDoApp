import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';

interface TaskProps {
  onAddTask: () => void;
}

const TaskInput: React.FC<TaskProps> = ({ onAddTask }) => {
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
      onAddTask();
    }
  };

  const resetForm = (): void => {
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.inputColumn}>
          <TextInput
            style={styles.inputField}
            placeholder="Title..."
            placeholderTextColor={COLORS.TEXT_SECONDARY}
            value={title}
            onChangeText={setTitle}
            maxLength={50}
          />

          <TextInput
            style={styles.inputField}
            placeholder="About..."
            placeholderTextColor={COLORS.TEXT_SECONDARY}
            value={description}
            onChangeText={setDescription}
            maxLength={200}
          />
        </View>

        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleSubmit}
          >
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Container
  container: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 33,
  },

  //Row
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2%',
  },

  //Input Column
  inputColumn: {
    width: '78%',
    gap: 6,
  },

  //Input Field Column
  inputField: {
    height: 32,
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 4,
    padding: 8,
    color: COLORS.TEXT_SECONDARY,
    fontSize: 14,
    fontFamily: 'Roboto',
  },

  //Button Column
  buttonColumn: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Button
  addButton: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Icon
  plusIcon: {
    fontSize: 24,
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
  }
});

export default TaskInput;