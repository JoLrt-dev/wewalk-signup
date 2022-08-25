import {createTheme, ThemeProvider} from '@mui/material/styles';
import { Container } from '@mui/system';
import React from "react";
import Copyright from './Copyright';


const theme = createTheme();

export default function SignIn() {


    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}