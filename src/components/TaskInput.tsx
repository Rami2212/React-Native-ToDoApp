import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Keyboard
} from 'react-native';
import useTaskStore from '../hooks/useTaskStore';
import { COLORS } from '../constants/colors';
import CustomInput from '../components/CustomInput';
import AddTaskButton from '../components/AddTaskButton';
import { TaskInputProps } from '../types';

const TaskInput = ({
  onAddTask
}: TaskInputProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { addTask } = useTaskStore();

  const handleSubmit = (): void => {
    if (title.trim() && description.trim()) {
      addTask({
        title: title.trim(),
        description: description.trim()
      });
      resetForm();
      onAddTask();
      Keyboard.dismiss();
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
          <CustomInput
            placeholder="Title..."
            value={title}
            onChangeText={setTitle}
            maxLength={50}
          />

          <CustomInput
            placeholder="About..."
            value={description}
            onChangeText={setDescription}
            maxLength={200}
            style={styles.descriptionInput}
          />
        </View>

        <View style={styles.buttonColumn}>
          <AddTaskButton onPress={handleSubmit} />
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

  // Input Column
  inputColumn: {
    width: '78%',
    gap: 6,
  },

  // Button Column
  buttonColumn: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskInput;