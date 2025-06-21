import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  errorInput: {
    borderColor: theme.colors.DANGER,
  },
  errorText: {
    color: theme.colors.DANGER,
    fontSize: theme.fontSizes.SMALL,
    marginBottom: theme.margin.LARGE,
    marginTop: theme.margin.SMALL,
  },
  input: {
    backgroundColor: theme.colors.CARD,
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    color: theme.colors.TEXT,
    marginBottom: theme.margin.EXTRA_LARGE,
    padding: theme.padding.NORMAL,
  },
  picker: {
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    marginBottom: theme.margin.EXTRA_LARGE,
  },
  textArea: {
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    height: theme.height.NORMAL,
    marginBottom: theme.margin.LARGE,
    padding: theme.padding.NORMAL,
  },
  switchWrapper: {
    alignItems: 'flex-start',
    marginBottom: theme.margin.EXTRA_LARGE,
  },
  switchLabel: {
    flex: 1,
    color: theme.colors.TEXT,
    fontWeight: '600',
  },
});
