import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: theme.borderRadius.NORMAL,
    paddingHorizontal: theme.padding.EXTRA_LARGE,
    paddingVertical: theme.padding.MEDIUM,
  },
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: '600',
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
    padding: theme.padding.EXTRA_LARGE,
  },
  message: {
    color: theme.colors.TEXT_SECONDARY,
    fontSize: theme.fontSizes.MEDIUM,
    marginBottom: theme.margin.BIG,
    textAlign: 'center',
  },
  title: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.EXTRA_LARGE,
    fontWeight: '600',
    marginBottom: theme.margin.BIG,
  },
});
