import { memo, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { ITask } from '@interfaces/ITask';
import TaskListItem from '@components/TaskListItem';

interface ITaskListProps {
  tasks: ITask[];
  onTaskPress: (task: ITask) => void;
}

const TaskList: React.FC<ITaskListProps> = ({ tasks, onTaskPress }) => {
  const renderItem = useCallback<ListRenderItem<ITask>>(
    ({ item }) => <TaskListItem item={item} onPress={onTaskPress} />,
    [onTaskPress],
  );

  const keyExtractor = useCallback((item: ITask) => item.id, []);

  return <FlatList data={tasks} keyExtractor={keyExtractor} renderItem={renderItem} />;
};

export default memo(TaskList);
