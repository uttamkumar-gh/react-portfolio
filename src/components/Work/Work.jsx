import React from 'react'
import './Work.css'
import projectImage from '../../assets/3215434.jpg'

function work() {
  return (
    <section className='work'>
      <div className="project-col">
        <div className="heading">
            <h2>My Recent Work</h2>
        </div>
        <div className="project-list">
            <div className="project">
                <div className="project-type">Frontend Development</div>
                <div className="project-name">Chronoswiss-watch E-com</div>
                <div className="project-url">
                    <a href="#"><i className="ri-arrow-right-long-line"></i></a>
                </div>
            </div>
            <div className="project">
                <div className="project-type">Webflow CMS Dashboard</div>
                <div className="project-name">Scalable CMS for Donation Portal</div>
                <div className="project-url">
                    <a href="#"><i className="ri-arrow-right-long-line"></i></a>
                </div>
            </div>
            <div className="project">
                <div className="project-type">HIPPA-compliant React/Node.js</div>
                <div className="project-name">Architected MVP for Health Tech</div>
                <div className="project-url">
                    <a href="#"><i className="ri-arrow-right-long-line"></i></a>
                </div>
            </div>
            <div className="project">
                <div className="project-type">Refactored 10K+ lines of spaghetti code</div>
                <div className="project-name">Revamped Legacy Codebase</div>
                <div className="project-url">
                    <a href="#"><i className="ri-arrow-right-long-line"></i></a>
                </div>
            </div>
        </div>
      </div>
      <div className="image-col">
        <div className="cat-name">Featured project</div>
        <img src={projectImage} alt="Collage concept with person" />
      </div>
    </section>
  )
}

export default work
