import Home from "./page/Home";
// import About from "./page/About";
import Contact from "./components/homePageComponent/contact/Contact";
import AboutPage from "./page/AboutPage";
import Header from "./components/homePageComponent/heder/Heder";
import Footer from "./components/homePageComponent/footer/Footer";
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";


function App() {
  return (
    <Router >
    <Header/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
     <Footer/>
    </Router>
  );
}

export default App;
