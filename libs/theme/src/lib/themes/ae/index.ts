import { amber, deepOrange, lightGreen, red } from '../../palette';
import * as Colors from './colors';

export default {
  colors: {
    primary: Colors.PRIMARY,
    onPrimary: Colors.WHITE,
    text: Colors.TEXT,
    surface: Colors.SURFACE,
    semantic: {
      success: {
        text: lightGreen[900],
        background: lightGreen[50],
      },
      error: {
        text: Colors.ERROR,
        background: red[50],
      },
      warning: {
        text: deepOrange[900],
        background: amber[50],
      },
    },
  },
};
