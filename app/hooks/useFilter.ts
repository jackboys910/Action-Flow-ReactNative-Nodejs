import { useState, useMemo, useCallback } from 'react';
import { ITask } from '@interfaces/ITask';

export type StatusFilter = ITask['status'] | null;
export type TaskStatuses = Record<ITask['status'], ITask[]>;

export const useFilter = (tasks: ITask[]) => {
  const [filterStatus, setFilterStatus] = useState<StatusFilter>(null);

  const tasksByStatus = useMemo(() => {
    return tasks.reduce<TaskStatuses>((acc, task) => {
      (acc[task.status] ??= []).push(task);
      return acc;
    }, {} as TaskStatuses);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (filterStatus == null) return tasks;
    return tasksByStatus[filterStatus] ?? [];
  }, [tasks, tasksByStatus, filterStatus]);

  const resetFilters = useCallback(() => setFilterStatus(null), []);
  const selectStatus = useCallback((status: StatusFilter) => setFilterStatus(status), []);

  return {
    filteredTasks,
    filterStatus,
    setFilterStatus: selectStatus,
    resetFilters,
  };
};
