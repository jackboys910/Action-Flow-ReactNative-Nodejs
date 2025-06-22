import { create } from 'zustand';
import * as taskApi from '@api/task.service';
import { ITask } from '@interfaces/ITask';

interface ITaskState {
  tasks: ITask[];
  loadTasks: () => Promise<void>;
  addTask: (draft: Omit<ITask, 'id'>) => Promise<void>;
  updateTask: (task: ITask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

export const useTaskStore = create<ITaskState>((set, get) => ({
  tasks: [],

  loadTasks: async () => {
    const apiTasks = await taskApi.fetchTasks();
    set({ tasks: apiTasks });
  },

  addTask: async (draft) => {
    const created = await taskApi.createTask(draft);
    set({ tasks: [created, ...get().tasks] });
  },

  updateTask: async (task) => {
    const updated = await taskApi.updateTask(task.id, task);
    set({ tasks: get().tasks.map((t) => (t.id === updated.id ? updated : t)) });
  },

  deleteTask: async (id) => {
    await taskApi.deleteTask(id);
    set({ tasks: get().tasks.filter((t) => t.id !== id) });
  },
}));
