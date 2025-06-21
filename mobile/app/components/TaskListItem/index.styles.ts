import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';
import { ITask } from '@interfaces/ITask';

export const getStatusStyle = (status: ITask['status']) => {
  switch (status) {
    case 'Completed':
      return { color: theme.colors.ACCENT };
    case 'In Progress':
      return { color: theme.colors.PROGRESS_TEXT };
    default:
      const _check: never = status;
      return _check;
  }
};

export const styles = StyleSheet.create({
  dateTime: {
    color: theme.colors.TEXT_SECONDARY,
    fontSize: theme.fontSizes.SMALL,
  },
  status: {
    color: theme.colors.ACCENT,
    fontSize: theme.fontSizes.SMALL,
    fontWeight: '600',
    marginTop: theme.margin.MEDIUM,
  },
  task: {
    backgroundColor: theme.colors.CARD,
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.NORMAL,
    borderWidth: theme.borderWidth.THIN,
    elevation: 1,
    marginBottom: theme.margin.LARGE,
    padding: theme.padding.LARGE,
    shadowColor: theme.colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: theme.shadowRadius.SMALL,
  },
  title: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: 'bold',
  },
  star: {
    position: 'relative',
    top: theme.margin.MEDIUM,
  },
});
