import Home from "./page/Home";
// import About from "./page/About";
import Contact from "./components/homePageComponent/contact/Contact";
import AboutPage from "./page/AboutPage";
import Header from "./components/homePageComponent/heder/Heder";
import Footer from "./components/homePageComponent/footer/Footer";
import {BrowserRouter ,Routes,Route  } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
    <Header/>
<Routes>
   
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/service" element={<Home />} />
  <Route path="/solution" element={<Home />} />
  <Route path="/career" element={<Home />} />
</Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
