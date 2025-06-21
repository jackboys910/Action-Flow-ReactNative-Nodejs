import { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ITask } from '@interfaces/ITask';
import { theme } from '@constants/styles/theme';
import { styles, getStatusStyle } from './index.styles';

interface ITaskListItemProps {
  item: ITask;
  onPress: (task: ITask) => void;
}

const TaskListItem: React.FC<ITaskListItemProps> = ({ item, onPress }) => {
  const handlePress = useCallback(() => {
    onPress(item);
  }, [onPress, item]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.task}>
        <Text style={styles.title}>
          {item.title}{' '}
          {item.isImportant && (
            <View>
              <MaterialIcons
                name="star"
                size={20}
                color={theme.colors.ACCENT}
                style={styles.star}
              />
            </View>
          )}
        </Text>
        <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(TaskListItem);
