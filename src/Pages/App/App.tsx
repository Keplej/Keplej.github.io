// import React from 'react'
import { BrowserRouter} from 'react-router-dom'

import Home from '../Home/Home'
// import About from '../About/About'
import {Box, createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Nav from "../../Components/Nav";
// import Projects from "../Projects/Projects.tsx";
// import Contact from "../Contact/Contact.tsx";

const drawerWidth = 240;


function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    })
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <BrowserRouter>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Nav />
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            ml: `${drawerWidth}px`, // Offsets the main content to leave space for the Nav drawer

                        }}
                    >
                        <section id="home" style={{height: '200vh'}}>
                            <Home/>
                        </section>

                        <section id="about" style={{height: '200vh'}}>
                            {/* <About/> */}
                        </section>

                        <section id="projects" style={{height: '200vh'}}>
                            {/* <Projects/> */}
                        </section>

                        <section id="contact" style={{height: '200vh'}}>
                            {/* <Contact/> */}
                        </section>
                    </Box>
                </Box>
            </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
