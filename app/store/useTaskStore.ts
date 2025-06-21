import { create } from 'zustand';
import { mmkv, STORAGE_KEY } from './storage/mmkv';
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
    mmkv.set(STORAGE_KEY, JSON.stringify(updatedTasks));
  },
  updateTask: (updatedTask) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );
    set({ tasks: updatedTasks });
    mmkv.set(STORAGE_KEY, JSON.stringify(updatedTasks));
  },
  deleteTask: (id) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== id);
    set({ tasks: updatedTasks });
    mmkv.set(STORAGE_KEY, JSON.stringify(updatedTasks));
  },
  loadTasks: async () => {
    const storedTasks = mmkv.getString(STORAGE_KEY);
    if (storedTasks) {
      set({ tasks: JSON.parse(storedTasks) });
    }
  },
}));
