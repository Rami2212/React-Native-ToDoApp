import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task, TaskInput, TaskStoreState } from '../types';

// Custom storage using AsyncStorage
const storage = {
  getItem: async (name: string): Promise<string | null> => {
    return await AsyncStorage.getItem(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await AsyncStorage.removeItem(name);
  },
};

// Zustand store definition
export const taskStore = create<TaskStoreState>()(
  persist(
    (set, get) => ({
      tasks: [],
      activeTaskId: null,

      // Add Task
      addTask: (task: TaskInput) => set((state) => ({
        tasks: [...state.tasks, {
          id: Date.now().toString(),
          title: task.title,
          description: task.description,
          completed: false,
          createdAt: new Date().toISOString(),
        }]
      })),

      // Delete Task
      deleteTask: (taskId: string) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== taskId),
        activeTaskId: state.activeTaskId === taskId ? null : state.activeTaskId,
      })),

      // Toggle Task Completion
      toggleComplete: (taskId: string) => set((state) => ({
        tasks: state.tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      })),

      // Update Task
      updateTask: (taskId: string, updates: Partial<Task>) => set((state) => ({
        tasks: state.tasks.map(task =>
          task.id === taskId ? { ...task, ...updates } : task
        )
      })),

      // Set Active Task
      setActiveTask: (taskId: string) => set({ activeTaskId: taskId }),

      // Clear Active Task
      clearActiveTask: () => set({ activeTaskId: null }),

      // Get Active Task
      getActiveTask: () => {
        const { tasks, activeTaskId } = get();
        return tasks.find(task => task.id === activeTaskId);
      },
    }),
    {
      name: 'task-storage',
      getStorage: () => storage,
    }
  )
);
