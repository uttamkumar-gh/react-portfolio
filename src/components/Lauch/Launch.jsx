import React from 'react'
import './Launch.css'
import discoveryStep from '../../assets/Notion-Logo.png'
import planningStep from '../../assets/miro-logo.png'
import desingStep from '../../assets/fimga-logo.png'
import buildStep from '../../assets/vscode-logo.png'
import testStep from '../../assets/postman-logo.webp'
import lauchStep from '../../assets/aws-logo.webp'

function launch() {
  return (
    <section className='project-lauch'>
      <div className="continer">
        <div className="main-heading">
          <h2>Get Hassle Free - From Concept to Launch</h2>
          <p>A Streamlined 6-step process refined over 10+ years and 50+ projects.</p>
        </div>

        <div className="steps-box">
          <div className="step">
            <div className="step-name">
              <div className="name-logo">
                <img src={discoveryStep} alt="Discovery" />
                Discovery
              </div>
              <div className="step-num">01</div>
            </div>
            <div className="step-text">
              <p>Align on goals, scope, and timeline</p>
            </div>
          </div>
          <div className="step">
            <div className="step-name">
              <div className="name-logo">
                <img src={planningStep} alt="Discovery" />
                Planning
              </div>
              <div className="step-num">02</div>
            </div>
            <div className="step-text">
              <p>Align on goals, scope, and timeline</p>
            </div>
          </div>
          <div className="step">
            <div className="step-name">
              <div className="name-logo">
                <img src={desingStep} alt="Design" />
                Design
              </div>
              <div className="step-num">03</div>
            </div>
            <div className="step-text">
              <p>Align on goals, scope, and timeline</p>
            </div>
          </div>
          <div className="step">
            <div className="step-name">
              <div className="name-logo">
                <img src={buildStep} alt="Build" />
                Build
              </div>
              <div className="step-num">04</div>
            </div>
            <div className="step-text">
              <p>Align on goals, scope, and timeline</p>
            </div>
          </div>
          <div className="step">
            <div className="step-name">
              <div className="name-logo">
                <img src={testStep} alt="Test" />
                Test
              </div>
              <div className="step-num">05</div>
            </div>
            <div className="step-text">
              <p>Align on goals, scope, and timeline</p>
            </div>
          </div>
          <div className="step">
            <div className="step-name">
              <div className="name-logo">
                <img src={lauchStep} alt="Launch" />
                Launch
              </div>
              <div className="step-num">06</div>
            </div>
            <div className="step-text">
              <p>Align on goals, scope, and timeline</p>
            </div>
          </div>
        </div>

        <div className="btn-text">
          <p>No black boxes - I'll share every commit, Figma file, and test report.</p>

          <div className="git-download-btn">
            <a href="#">
              Explore
              <i className="ri-github-fill"></i>
            </a>
            <a href="#" className='outline-btn'>
              Download Process
              <i className="ri-download-2-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default launch
