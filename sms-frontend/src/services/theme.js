import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2'
        },
        secondary: {
            main: '#dc004e'
        }
    },
    typography: {
        fontFamily: 'Poppins, Roboto, sans-serif'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: '600'
                }
            }
        }
    }
});

export default theme;