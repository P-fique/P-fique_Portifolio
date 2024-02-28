import React from 'react';
import { useState } from 'react';
import "./header.css";

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header");
    })

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className="nav__logo">Pacifique TUYIZERE</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                      <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active__link" : "nav__link" }>
                            <i className='uil uil-estate nav__icon'></i>Home
                        </a>
                        </li>  

                        
                      <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active__link" : "nav__link" }>
                            <i className='uil uil-user nav__icon'></i>About
                        </a>
                        </li> 

                        
                      <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active__link" : "nav__link" }>
                            <i className='uil uil-file-alt nav__icon'></i>Skills
                        </a>
                        </li> 

                        
                      <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active__link" : "nav__link" }>
                            <i className='uil uil-briefcase-alt nav__icon'></i>Services
                        </a>
                        </li> 

                        
                      <li className="nav__item">
                        <a href="#portifolio" onClick={() => setActiveNav("#portifolio")} className={activeNav === "#portifolio" ? "nav__link active__link" : "nav__link" }>
                            <i className='uil uil-scenery nav__icon'></i>Portifolio
                        </a>
                        </li> 

                        <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active__link" : "nav__link" }>
                            <i className='uil uil-message nav__icon'></i>Contact
                        </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 1.75h4.5v4.5h-4.5zm0 8h4.5v4.5h-4.5zm8 0h4.5v4.5h-4.5zm0-8h4.5v4.5h-4.5z"/></svg>
                </div>
            </nav>
        </header> 
    )
}


export default Header