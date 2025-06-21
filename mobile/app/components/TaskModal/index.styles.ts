import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: theme.borderRadius.SMALL,
    marginTop: theme.margin.LARGE,
    padding: theme.padding.MEDIUM,
  },
  buttonClose: {
    backgroundColor: theme.colors.DANGER,
    borderRadius: theme.borderRadius.SMALL,
    marginTop: theme.margin.LARGE,
    padding: theme.padding.MEDIUM,
  },
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    backgroundColor: theme.colors.CARD,
    borderRadius: theme.borderRadius.LARGE,
    margin: theme.margin.BIG,
    padding: theme.padding.EXTRA_LARGE,
  },
  label: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: '600',
    marginBottom: theme.margin.MEDIUM,
    marginTop: theme.margin.EXTRA_LARGE,
  },
  title: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.LARGE,
    fontWeight: 'bold',
    marginBottom: theme.margin.EXTRA_LARGE,
  },
});
