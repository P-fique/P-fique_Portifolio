import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Pacifique TUYIZERE</h1>
  <ul className="footer__list">
    <li>
        <a href="#about" className="footer__link">About</a>
    </li>

    <li>
        <a href="#portifolio" className="footer__link">Projects</a>
    </li>

    <li>
        <a href="#services" className="footer__link">Services</a>
    </li>
    </ul>   


       <div className="footer__social">
        <a href="https://www.instagram.com/i.lokk.o/"
        className='footer__social-link' target="_blank">
            <i class="bx bxl-instagram"></i>
            </a> 

            
        <a href="https://web.facebook.com/profile.php?id=100005380457340"
        className='footer__social-link' target="_blank">
            <i class="bx bxl-facebook"></i>
            </a> 

            
        <a href="https://twitter.com/Kilocal_P"
        className='footer__social-link' target="_blank">
            <i class="bx bxl-twitter"></i>
            </a> 
       </div>
       <span className='footer__copy'>&#169; 2024. | Pacifique TUYIZERE</span>
        </div>
    </div>
  )
}

export default Footer