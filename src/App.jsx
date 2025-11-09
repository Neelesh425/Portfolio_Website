import React,{useEffect} from "react"
import Layout from "./components/Layout";
import Home from "./components/Home"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio";
import Work from "./components/Work"
import About from "./components/About"
//import Logo from "./components/Home/Logo";
import './App.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
 
  useEffect(() => {
    document.title = "Neelesh_Portfolio"
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="work" element={<Work />} />
         <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );

}

export default App
