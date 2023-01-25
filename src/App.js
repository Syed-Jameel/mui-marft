import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/mui-marft">
          <header>
            <Navbar flexDirection={"row"} />
          </header>
          <section>
            <Routes>
              <Route exact path="/mui-marft" element={<Hero />}></Route>
              <Route path="/about-us" element={<AboutUs/>}></Route>
              <Route path="/service" element={<Service />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </section>
          <footer>
            <Footer/>
          </footer>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
