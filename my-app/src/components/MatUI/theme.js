import { createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: { // blues 
        main: '#ffffff',
        light: '#2E8F9B', // turquois
        dark: '#0E2832', // dark navy
        contrastText: '#fff',
      },
      secondary: {
        light: '#C6A39E', // blush pink
        main: '#D8887D', // salmon
        dark: '#A6503C', // dark nude lipstick
        contrastText: '#000',
      },
    },
  });

  export default theme; 