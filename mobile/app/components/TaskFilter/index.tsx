import { useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { StatusFilter, ImportantFilter } from '@hooks/useFilter';
import { statusOptions } from '@constants/statusOptions';
import { styles } from './index.styles';

interface ITaskFilterProps {
  isVisible: boolean;
  onClose: () => void;
  filterStatus: StatusFilter;
  importantOnly: ImportantFilter;
  onFilterChange: (status: StatusFilter, onlyImportant: ImportantFilter) => void;
}

const TaskFilter: React.FC<ITaskFilterProps> = ({
  isVisible,
  onClose,
  filterStatus,
  importantOnly,
  onFilterChange,
}) => {
  const translateY = useSharedValue(-50);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: withTiming(isVisible ? 1 : 0, { duration: 250 }),
  }));

  useEffect(() => {
    translateY.value = withTiming(isVisible ? 0 : -160, { duration: 250 });
  }, [isVisible]);

  const handleStatusChange = useCallback(
    (status: StatusFilter) => {
      onFilterChange(filterStatus === status ? null : status, importantOnly);
    },
    [filterStatus, importantOnly, onFilterChange],
  );

  const handleImportantToggle = useCallback(
    (onlyImportant: boolean) => {
      onFilterChange(filterStatus, onlyImportant);
    },
    [filterStatus, onFilterChange],
  );

  const handleShowAll = useCallback(() => {
    handleImportantToggle(false);
  }, [handleImportantToggle]);

  const handleShowImportant = useCallback(() => {
    handleImportantToggle(true);
  }, [handleImportantToggle]);

  return (
    <Animated.View style={[styles.filterContainer, animatedStyle]}>
      <Text style={styles.filterTitle}>Importance:</Text>
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[styles.filterBtn, !importantOnly && styles.filterBtnActive]}
          onPress={handleShowAll}
        >
          <Text style={[styles.filterBtnText, !importantOnly && styles.filterBtnTextActive]}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterBtn, importantOnly && styles.filterBtnActive]}
          onPress={handleShowImportant}
        >
          <Text style={[styles.filterBtnText, importantOnly && styles.filterBtnTextActive]}>
            Important
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.filterTitle}>Status:</Text>
      <View style={styles.filterRow}>
        {statusOptions.map((status) => (
          <TouchableOpacity
            key={status}
            style={[styles.filterBtn, filterStatus === status && styles.filterBtnActive]}
            onPress={() => handleStatusChange(status)}
          >
            <Text
              style={[styles.filterBtnText, filterStatus === status && styles.filterBtnTextActive]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={onClose}>
        <Text style={styles.resetBtnText}>Reset Filters</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TaskFilter;
