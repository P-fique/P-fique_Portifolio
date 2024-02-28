import React, { useState } from 'react'
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
    <h2 className="section__title">
        Services
    </h2>
    <span className="section__subtitle">
        What I offer!
    </span>
    <div className="services__container container grid">
      <div className="services__content">
        <div >
          <i className="services__icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.215 6.16C2.354 6.147.584 6.953 0 8.19c3.68-.998 5.747-.332 8.244 2.638c.99 1.184 1.895 2.45 2.992 3.51c1.098 1.08 2.303 2.161 3.637 2.826c2.97 1.475 6.802.415 8.05-1.994c-.387.145-.752.27-1.118.416c-1.693 1.181-3.92 1.204-5.748-.375c-1.873-1.62-3.487-3.532-5.166-5.36C9.276 8.107 7.555 6.55 5.016 6.217a6.243 6.243 0 0 0-.801-.057Zm15.639 1.719c-.957-.013-2 .301-3.043.976c-1.034.686-1.96 1.538-2.971 2.348c-.603-.395-1.204-.81-1.807-1.205c-.043.062-.11.145-.152.207c.15.187.324.354.474.54c.861.956 1.743 1.931 2.69 2.866c.947-.852 1.723-1.598 2.562-2.305c2.411-2.035 4.628-1.725 6.393 1.038c-.355-2.828-2.042-4.437-4.146-4.465ZM4.393 12.615c1.291 5.422 4.733 4.902 7.08 3.738c.624.291 1.528.603 2.109.873c.043-.062.107-.125.15-.187c-1.033-.665-1.978-1.538-2.84-2.37c-.215-.207-.41-.415-.603-.622c-3.336 2.866-5.896-1.432-5.896-1.432z"/></svg></i>
          <h3 className="services__title">Full Stack  Developer</h3>
        </div>
        <span className="services__button" onClick={() =>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>


        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            <h3 className="services__modal-title">Full Stack Developer</h3>
            <p className="services__modal-description">Service with more than two years of experience. Providing quality work to clients</p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  I work with more platmforms on both Back & Front End
                </p>
              </li>



              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 I am familiar with databases
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  I work with most languaes
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 System Integration, Maintenance & Upgrading
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 Database management system organization
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="services__content">
        <div >
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">Videography</h3>
        </div>
        <span className="services__button" onClick={() =>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>


        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
            <h3 className="services__modal-title">Videography</h3>
            <p className="services__modal-description">Service with more than two years of experience. Providing quality work to clients</p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  I direct music videos
                </p>
              </li>



              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 I write scripts for music videos, films and poems
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  I animate words and characters
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  I produce best quality visualizers
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 I edit videos
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  I am a professional set organizer
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="services__content">
        <div >
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">Other Services</h3>
        </div>
        <span className="services__button" onClick={() =>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>


        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            <h3 className="services__modal-title">Other Services</h3>
            <p className="services__modal-description">Service with more than three years of experience. Providing quality work to clients</p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  IT support
                </p>
              </li>



              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 PC hardware 
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  Computer maintenance
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                  Networking
                </p>
              </li>

              
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">
                 IT advisor
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Services