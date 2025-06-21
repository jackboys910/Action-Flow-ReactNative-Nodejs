import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: theme.colors.PRIMARY_DARK,
    borderRadius: theme.borderRadius.SMALL,
    marginLeft: theme.margin.LARGE,
    padding: theme.padding.NORMAL,
  },
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: theme.fontSizes.SMALL,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.padding.LARGE,
  },
  title: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: theme.fontSizes.EXTRA_LARGE,
    fontWeight: 'bold',
  },
});
