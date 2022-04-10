import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(15, 99%, 57%)',
    },
    secondary: {
      main: 'hsl(0, 0%, 89%)',
    },
    tertiary: {
      main: 'hsl(0, 0%, 18%)'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
