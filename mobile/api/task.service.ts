import { ITask } from '@interfaces/ITask';
import { api } from './index';

export const fetchTasks = () => api.get<ITask[]>('/tasks').then((r) => r.data);

export const createTask = (task: Omit<ITask, 'id'>) =>
  api.post<ITask>('/tasks', task).then((r) => r.data);

export const updateTask = (id: string, task: Partial<ITask>) =>
  api.put<ITask>(`/tasks/${id}`, task).then((r) => r.data);

export const deleteTask = (id: string) => api.delete(`/tasks/${id}`);
