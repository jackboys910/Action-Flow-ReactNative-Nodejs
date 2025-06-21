import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  filterBtn: {
    alignItems: 'center',
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.PRIMARY,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.NORMAL,
    flex: 1,
    marginRight: theme.margin.EXTRA_MEDIUM,
    minWidth: theme.width.NORMAL,
    paddingVertical: theme.padding.SMALL,
  },
  filterBtnActive: {
    backgroundColor: theme.colors.PRIMARY,
    borderColor: theme.colors.PRIMARY,
  },
  filterBtnText: {
    color: theme.colors.PRIMARY,
    fontSize: theme.fontSizes.NORMAL,
    fontWeight: 'bold',
  },
  filterBtnTextActive: {
    color: theme.colors.BUTTON_TEXT,
  },
  filterContainer: {
    backgroundColor: theme.colors.CARD,
    borderRadius: theme.borderRadius.SMALL,
    elevation: 2,
    margin: theme.margin.LARGE,
    overflow: 'hidden',
    padding: theme.padding.MEDIUM,
    shadowColor: theme.colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: theme.shadowRadius.NORMAL,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: theme.margin.MEDIUM,
  },
  filterTitle: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.SMALL,
    fontWeight: 'bold',
    marginVertical: theme.margin.REGULAR,
  },
  resetBtn: {
    backgroundColor: theme.colors.DANGER,
    borderRadius: theme.borderRadius.SMALL,
    marginTop: theme.margin.LARGE,
    padding: theme.padding.NORMAL,
  },
  resetBtnText: {
    color: theme.colors.BUTTON_TEXT,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
