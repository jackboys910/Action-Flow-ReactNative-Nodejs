import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITask } from '@interfaces/ITask';

interface ITaskState {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (updateTask: ITask) => void;
  deleteTask: (id: string) => void;
  loadTasks: () => Promise<void>;
}

export const useTaskStore = create<ITaskState>((set, get) => ({
  tasks: [],
  addTask: (task) => {
    const updatedTasks = [task, ...get().tasks];
    set({ tasks: updatedTasks });
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  },
  updateTask: (updatedTask) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );
    set({ tasks: updatedTasks });
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  },
  deleteTask: (id) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== id);
    set({ tasks: updatedTasks });
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  },
  loadTasks: async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    if (storedTasks) {
      set({ tasks: JSON.parse(storedTasks) });
    }
  },
}));
