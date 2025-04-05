import React from 'react'
import './About.css'
import personImage from '../../assets/young-man-with-hoodie.jpg'

function about() {
  return (
    <section className='about'>
      <div className="image-col">
        <img src={personImage} alt="Collage concept with person" />
      </div>
      <div className="about-content">
        <h2>Ipsum beyond development — your partner in building bold ideas</h2>
        <div className="text">
            <p>Over a decade of experience delivering scalable apps and agency-ready solutions with a focus on speed, security, and UX. scalable apps and agency-ready solutions with a focus security.</p>
            <p>Lorem ipsum writing clean, scalable code with clear intent. No jargon—just efficient dev, solid fixes, and real-world results. Lorem ipsum writing clean, scalable code with clear intent.</p>
            <p>Beyond coding, I mentor ipsum devs on LinkedIn, sharing lorem insights.</p>
        </div>
      </div>
      <div className="experince-col">
        <div className="heading">
            <h2>My Working Experince</h2>
        </div>
        <div className="experience-list">
            <div className="experince">
                <div className="position-name">Lead Engineer</div>
                <div className="company-name">Notion</div>
                <div className="work-duration">2023 - Now</div>
            </div>
            <div className="experince">
                <div className="position-name">Senior Software Engineer</div>
                <div className="company-name">Google</div>
                <div className="work-duration">2019 - 2023</div>
            </div>
            <div className="experince">
                <div className="position-name">Mid-Level Software Engineer</div>
                <div className="company-name">Data Soft</div>
                <div className="work-duration">2017 - 2019</div>
            </div>
            <div className="experince">
                <div className="position-name">Software Engineer</div>
                <div className="company-name">Prime Car</div>
                <div className="work-duration">2015 - 2017</div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default about
