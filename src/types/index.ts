import { StyleProp, ViewStyle, TextStyle } from 'react-native';

// CustomButton types
export type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

// DeleteConfirmation types
export type DeleteConfirmationProps = {
  visible: boolean;
  taskId: string | null;
  onClose: () => void;
};

// Input Field types
export type CustomInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  maxLength?: number;
};

// Edit Task Modal types
export type EditTaskModalProps = {
  visible: boolean;
  task: Task | null;
  onClose: () => void;
  onSave: (task: Task) => void;
};

// AddTaskButton types
export type AddTaskButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

// Task type
export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
};

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

export interface TaskInput {
  title: string;
  description: string;
}

export interface TaskStoreState {
  tasks: Task[];
  activeTaskId: string | null;
  addTask: (task: TaskInput) => void;
  deleteTask: (taskId: string) => void;
  toggleComplete: (taskId: string) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  setActiveTask: (taskId: string) => void;
  clearActiveTask: () => void;
  getActiveTask: () => Task | undefined;
}