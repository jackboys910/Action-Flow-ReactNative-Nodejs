import { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ITask } from '@interfaces/ITask';
import Navbar from '@components/Navbar';
import TaskList from '@components/TaskList';
import TaskModal from '@components/TaskModal';
import TaskFilter from '@components/TaskFilter';
import { useTaskStore } from '@store/useTaskStore';
import { useFilter, StatusFilter, ImportantFilter } from '@hooks/useFilter';
import { styles } from './index.styles';

interface IRootStackParamList {
  Home: undefined;
  TaskDetails: { task: ITask };
}

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();
  const { tasks, loadTasks, addTask } = useTaskStore();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const {
    filteredTasks,
    filterStatus,
    importantOnly,
    setFilterStatus,
    setImportantOnly,
    resetFilters,
  } = useFilter(tasks);

  useEffect(() => {
    loadTasks();
  }, []);

  const handleTaskPress = useCallback(
    (task: ITask) => {
      navigation.navigate('TaskDetails', { task });
    },
    [navigation],
  );

  const handleSaveTaskPress = useCallback(
    (task: ITask) => {
      addTask(task);
      setModalVisible(false);
    },
    [addTask],
  );

  const handleAddTaskPress = useCallback(() => {
    if (isFilterVisible) setFilterVisible(false);
    setModalVisible(true);
  }, [isFilterVisible]);

  const handleFilterClose = useCallback(() => {
    setFilterVisible(false);
    resetFilters();
  }, [resetFilters]);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleFilterChange = useCallback(
    (status: StatusFilter, onlyImportant: ImportantFilter) => {
      setFilterStatus(status);
      setImportantOnly(onlyImportant);
    },
    [setFilterStatus, setImportantOnly],
  );

  const handleToggleFilter = useCallback(() => {
    setFilterVisible((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Navbar
        onAddTask={handleAddTaskPress}
        onToggleFilter={handleToggleFilter}
        isFilterVisible={isFilterVisible}
        onClose={handleFilterClose}
      />
      {isFilterVisible && (
        <TaskFilter
          onFilterChange={handleFilterChange}
          isVisible={isFilterVisible}
          onClose={handleFilterClose}
          filterStatus={filterStatus}
          importantOnly={importantOnly}
        />
      )}
      {filteredTasks.length === 0 ? (
        <Text style={styles.noTasksText}>No tasks available</Text>
      ) : (
        <TaskList tasks={filteredTasks} onTaskPress={handleTaskPress} />
      )}
      <TaskModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSaveTask={handleSaveTaskPress}
      />
    </View>
  );
};

export default Home;
