import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    components: {
    MuiTextField: {
        styleOverrides: {
          
            root: {
                width: '100%',
                
            },
        }
    }
}

});
theme = responsiveFontSizes(theme);

export default theme