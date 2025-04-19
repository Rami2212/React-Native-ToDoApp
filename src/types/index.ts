import { StyleProp, ViewStyle, TextStyle, ImageSourcePropType } from 'react-native';

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

// CustomInput types
export type CustomInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  maxLength?: number;
  placeholderTextColor?: string;
};

// Edit Task Modal types
export type EditTaskModalProps = {
  visible: boolean;
  task: Task | null;
  onClose: () => void;
  //onSave: (task: Task) => void;
};

// Share Task Modal types
export type ShareTaskModalProps = {
  visible: boolean;
  task: Task | null;
  onClose: () => void;
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

// TaskInput types
export type TaskInputProps = {
  onAddTask: () => void;
};

// TaskItem types
export type TaskItemProps = {
  task: Task;
  isActive: boolean;
  onPress: () => void;
  onDelete: () => void;
};

// DeleteButton types
export type DeleteButtonProps = {
  onPress: (e: any) => void;
  style?: StyleProp<ViewStyle>;
};

// CompletedCheckbox types
export type CompletedCheckboxProps = {
  completed: boolean;
  onPress: (e: any) => void;
  style?: StyleProp<ViewStyle>;
};

// Action Button types
export type ActionButtonProps = {
  imageSource: ImageSourcePropType;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

// Task Actions types
export type TaskActionsProps = {
  taskId: string;
  onEdit?: () => void;
  onShare?: () => void;
};

// TaskList types
export type TaskListProps = {
  tasks: Task[];
  activeTaskId: string | null;
  onTaskPress: (taskId: string) => void;
  onDeletePress: (taskId: string) => void;
  onEditPress: (taskId: string) => void;
  onSharePress: (taskId: string) => void;
};

// Social Media Icon Types
export type SocialMediaIconProps = {
  imageSource: ImageSourcePropType;
  onPress: () => void;
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