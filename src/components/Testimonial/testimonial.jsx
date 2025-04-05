import React from 'react'
import './testimonial.css'
import testi_1 from '../../assets/postman-logo.webp'
import testi_2 from '../../assets/fimga-logo.png'
import personImg from '../../assets/young-man-with-hoodie.jpg'


function testimonial() {
  return (
    <section className='testimonial-section'>
      <div className="heading">
        <h2>From MVP to Masterpiece: Proven Client Success Stories</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div className="testimonial-client">
            <img src={testi_1} alt="Testi One" />
            Postman
          </div>
          <div className="testimonial-text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem a quae tempora nesciunt provident esse? Accusamus accusantium, unde aspernatur sapiente facilis excepturi maiores cupiditate?</p>
          </div>
          <div className="client-name">
            <img src={personImg} alt="Person" />
            <div className="name-postion">
              <span className='name'>Alex Chen</span>
              <span className='position'>Co-Founder @ Figma</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-client">
            <img src={testi_2} alt="Testi One" />
            Figma
          </div>
          <div className="testimonial-text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem a quae tempora nesciunt provident esse? Accusamus eaque accusantium, unde aspernatur sapiente facilis excepturi maiores cupiditate?</p>
          </div>
          <div className="client-name">
            <img src={personImg} alt="Person" />
            <div className="name-postion">
              <span className='name'>Alex Chen</span>
              <span className='position'>Co-Founder @ Figma</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-client">
            <img src={testi_1} alt="Testi One" />
            Postman
          </div>
          <div className="testimonial-text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem a quae tempora nesciunt provident esse? Accusamus eaque accusantium, unde aspernatur sapiente facilis excepturi maiores cupiditate?</p>
          </div>
          <div className="client-name">
            <img src={personImg} alt="Person" />
            <div className="name-postion">
              <span className='name'>Alex Chen</span>
              <span className='position'>Co-Founder @ Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default testimonial
