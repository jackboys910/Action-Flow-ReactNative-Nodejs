import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: '600',
  },
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
    padding: theme.padding.EXTRA_LARGE,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.DANGER,
    borderRadius: theme.borderRadius.SMALL,
    padding: theme.padding.LARGE,
  },
  label: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: '600',
    marginBottom: theme.margin.MEDIUM,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: theme.borderRadius.SMALL,
    marginBottom: theme.margin.LARGE,
    padding: theme.padding.LARGE,
  },
});
