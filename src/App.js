import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Contact from "./components/contact/Contact";
import Work from "./components/portifolio/Work";
const App = () => {
    return (
        <>
        <Header />
        <main className="main">
            <Home />
            <About /> 
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Contact />
        </main>
        <Footer />
        <ScrollUp />
        </>
    )
}

export default App