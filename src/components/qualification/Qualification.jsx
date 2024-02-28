import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {


  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Academic Journey</span>
       <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
           onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
            <div className="qualification__data">
              <div>

              <h3 className="qualification__title">PCM (Physics, Chemistry and Mathematics)</h3>
                <span className="qualification__subtitle">Ecole des Science de Musanze </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2016 - 2018
                
                </div>
              </div> 
              <div>
                <span className="qualification__rounder">
                </span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              
              <div>
                <span className="qualification__rounder">
                </span>
                <span className="qualification__line"></span>
              </div>
              <div>
              <h3 className="qualification__title">FullStack Developer</h3>
                <span className="qualification__subtitle">BScholarz</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> May 2023 - Present

                </div>
              </div>
            </div>


            <div className="qualification__data">
              <div>

              <h3 className="qualification__title">IT Department</h3>
                <span className="qualification__subtitle">University of Rwanda </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019 - Present
                
                </div>
              </div>
              <div>
                <span className="qualification__rounder">
                </span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>

































          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
            <div className="qualification__data">
              <div>
              <h3 className="qualification__title">Photography & Videography</h3>
                <span className="qualification__subtitle">The Best Stiduo </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder">
                </span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              
              <div>
                <span className="qualification__rounder">
                </span>
                <span className="qualification__line"></span>
              </div>
              <div>
              <h3 className="qualification__title">Fullstacker Developer</h3>
                <span className="qualification__subtitle">Andela Rwanda </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2023
              
                </div>
              </div>
            </div>


            <div className="qualification__data">
              <div>
              <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">Telminal Group Limited</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder">
                </span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Qualification