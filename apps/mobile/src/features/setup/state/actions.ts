export const SELECT_THEME = 'SELECT_THEME';

export const selectTheme = (payload: string) => ({
  type: SELECT_THEME,
  payload,
});
