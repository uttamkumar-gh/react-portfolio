import React from 'react'
import './Banner.css'
import bannerImage from '../../assets/html-css-collage-concept-with-person.jpg'
import icon_1 from '../../assets/Notion-Logo.png'
import icon_2 from '../../assets/miro-logo.png'
import icon_3 from '../../assets/fimga-logo.png'
import icon_4 from '../../assets/vscode-logo.png'
import icon_5 from '../../assets/postman-logo.webp'
import icon_6 from '../../assets/aws-logo.webp'

function banner() {
  return (
    <section className='banner'>
      <div className="banner-content">
        <h1>Lorem ipsum dolor sit amet, elit solutions pro startups</h1>
        <p>Independent lorem developer for startups, agencies, and SaaS disruptors.</p>

        <div className="banner-buttons">
            <a href="#" className="btn-one">Explore GitHub</a>
            <a href="#" className="btn-two outline-btn">Get Webflow Template</a>
        </div>
      </div>
      <div className="banner-img">
        <img src={bannerImage} alt="HTML CSS Collage concept with person" />
      </div>

      <div className="industry">
        <h2>Worked With Industry Leaders</h2>
        <div className="industry-list">
            <div className="industry-name">
              <img src={icon_1} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_2} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_3} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_4} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_5} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_6} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_1} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_2} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_3} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_4} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_5} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_6} alt="" />
            </div>
            <div className="industry-name">
              <img src={icon_1} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default banner
