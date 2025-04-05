import React from 'react'
import './Contact.css'

function contact() {
  return (
    <section className='contact-section'>
      <div className="contact-form">
        <h2>Let's Work Together</h2>
        <p>Let's Build Your Next Project-or Connect on GitHub to Collaborate!</p>

        <div className="form">
            <form action="#">
                <div className="name-field">
                    <label>Name*</label>
                    <input type="text" name="name" id="" placeholder='Your Name'/>
                </div>
                <div className="email-field">
                    <label>Email*</label>
                    <input type="text" name="name" id="" placeholder='Your Email'/>
                </div>
                <div className="message-field">
                    <label>Message*</label>
                    <textarea name="name" id="" placeholder='Write your text here'/>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Explore GitHub" />
                </div>
            </form>
        </div>
      </div>
      <div className="quick-links">
        <div className="useful-links">
            <h4>Useful Link</h4>
            <ul>
                <li><a href="#">My Work</a></li>
                <li><a href="#">How I Work</a></li>
                <li><a href="#">My Blog</a></li>
                <li><a href="#">Mega Project</a></li>
                <li><a href="#">Testimonial</a></li>
            </ul>
        </div>
        <div className="learn-links">
            <h4>Learn</h4>
            <ul>
                <li><a href="#">Dev Insight</a></li>
                <li><a href="#">Figma Insight</a></li>
                <li><a href="#">Framework</a></li>
                <li><a href="#">DevOps</a></li>
                <li><a href="#">IOT</a></li>
            </ul>
        </div>
        <div className="resources-links">
            <h4>Recources</h4>
            <ul>
                <li><a href="#">Free Tools</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Webflow Tutorials</a></li>
                <li><a href="#">Cheat Sheet</a></li>
                <li><a href="#">Templates</a></li>
            </ul>
        </div>

        <div className="social-links">
            <div className="linkedin">
                <i className="ri-linkedin-fill"></i>
            </div>
            <div className="facebook">
                <i className="ri-facebook-fill"></i>
            </div>
            <div className="intagram">
                <i className="ri-instagram-line"></i>
            </div>
            <div className="youtube">
                <i className="ri-youtube-line"></i>
            </div>
        </div>
        <div className="copyright">
            <span>All Rights Reserved</span>
            <span>&copy; : 2025</span>
        </div>
      </div>
    </section>
  )
}

export default contact
