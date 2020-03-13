import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
      text: 'rgba(0, 0, 0, 0.56)',
      border:'1px solid rgba(0, 0, 0, 0.12)',
      shadow:'0 3px 5px 2px rgba(0, 0, 0, 0.54)'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;