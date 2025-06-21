import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  noTasksText: {
    color: theme.colors.MUTED,
    fontSize: theme.fontSizes.MEDIUM,
    marginTop: theme.margin.BIG,
    textAlign: 'center',
  },
});
