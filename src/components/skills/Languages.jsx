import React from 'react'

const Languages = () => {
  return (
    <div className="skills__content">
        <h3 className="skills_title">
       Languages
        </h3>
        <div className="skills__box">
            <div className="skills__group">
             <div className="skills_data">
                <i className="bx bx-badge-check"></i>
             <div>
                <h3 className="skills__name">
                  Kinyarwanda
                </h3>
                <span className="skills__level">Native</span>
             </div>
             </div>

             <div className="skills_data">
                <i className="bx bx-badge-check"></i>
             <div>
                <h3 className="skills__name">
               English
                </h3>
                <span className="skills__level">Fluent</span>
             </div>
             </div>
            </div>

            <div className="skills__group">
             <div className="skills_data">
                <i className="bx bx-badge-check"></i>
             <div>
                <h3 className="skills__name">
                     Swahili
                </h3>
                <span className="skills__level">Intermediate</span>
             </div>
             </div>


            <div className="skills_data">
               <i className="bx bx-badge-check"></i>
            <div>
               <h3 className="skills__name">
                  French
               </h3>
               <span className="skills__level">Begginer</span>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Languages