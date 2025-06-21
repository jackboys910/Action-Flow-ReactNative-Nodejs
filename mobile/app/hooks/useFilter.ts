import { useState, useMemo, useCallback } from 'react';
import { ITask } from '@interfaces/ITask';

export type StatusFilter = ITask['status'] | null;
export type ImportantFilter = boolean;

export const useFilter = (tasks: ITask[]) => {
  const [filterStatus, setFilterStatus] = useState<StatusFilter>(null);
  const [importantOnly, setImportantOnly] = useState<ImportantFilter>(false);

  const filteredTasks = useMemo(() => {
    let result = tasks;

    if (filterStatus) {
      result = result.filter((t) => t.status === filterStatus);
    }

    if (importantOnly) {
      result = result.filter((t) => t.isImportant);
    }

    return [...result];
  }, [tasks, filterStatus, importantOnly]);

  const resetFilters = useCallback(() => {
    setFilterStatus(null);
    setImportantOnly(false);
  }, []);

  return {
    filteredTasks,
    filterStatus,
    importantOnly,
    setFilterStatus,
    setImportantOnly,
    resetFilters,
  };
};
