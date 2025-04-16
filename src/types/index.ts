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