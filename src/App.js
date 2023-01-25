import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme} from '@mui/material/styles';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

const theme = createTheme({
  // breakpoints: {
  // },
});

export const ColorModeContext = React.createContext();

function App() {

  const [mode, setMode] = React.useState('light');
  const toggleColorMode =  () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
      ? {
          // palette values for light mod
          primary: {
            main: '#F8F3EC',
            linkTextColor: '#6F6F6F',
            logoTextColor: '#181817',
            background:'#F8F3EC',
            textColor:"#000",
            cardTextColor:"#181817",
            blogBackgroundColor:"#FFF",
           
          },
          // secondary: {
          //   main: '#6F6F6F',
          // },
          // background: {
          //   default: '#F8F3EC',
          //   paper: '#F8F3EC',
          // },
          // text: {
          //   primary: 'black',
          //   secondary: 'black',
          // },
         
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#000',
            linkTextColor: '#FFF',
            logoTextColor: '#FFF',
            background:'#000',
            textColor:"#FFF",
            cardTextColor:"#FFF",
            blogBackgroundColor:"#000",
          
          },
          // background: {
          //   default: '#000',
          //   paper: '#000',
          // },
          // text: {
          //   primary: 'white',
          //   secondary: 'white',
          // },
        }),
        },
      }),
    [mode],
  );

  return (
    <>
    <ColorModeContext.Provider value= {mode}>
     
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <header>
            <Navbar
              flexDirection={"row"}
              obj={{ first: "links", second: "logo", third: "icons" }}
              toggleColorMode ={toggleColorMode}
            />
          </header>
          <section>
            <Routes>
              <Route exact path="/" element={<Hero />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/service" element={<Service />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </section>
          <footer>
            <Footer />
          </footer>
          </ThemeProvider>
        </BrowserRouter>
     
    </ColorModeContext.Provider>
    </>
  );
}

export default App;
