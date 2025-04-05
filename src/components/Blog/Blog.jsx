import React from 'react'
import './Blog.css'
import blogImg_1 from '../../assets/high-angle-journalism-interview-office.jpg'
import blogImg_2 from '../../assets/3d-rendering-biorobots-concept.jpg'
import blogImg_3 from '../../assets/programming-background-with-person-working-with-codes-computer.jpg'
import blogImg_4 from '../../assets/high-angle-journalism-interview-office.jpg'

function blog() {
  return (
    <section className='blog-section'>
      <div className="left-col">
        <div className="heading">
            <h2>Tech Talk: Building Faster and Scalable</h2>
        </div>
        <div className="first-blog">
            <img src={blogImg_1} alt="" />
            <div className="initial-blog-date-time">
                <div className="post-date">5 February 2025</div>
                <div className="post-name">
                    <h4>5 Web Performance Hacks That Boosted Client Revenue by 20%</h4>
                </div>
            </div>
        </div>
      </div>
      <div className="blog-list">
        <div className="blog-box">
            <div className="post-img">
                <img src={blogImg_2} alt="" />
            </div>
            <div className="post-date-time">
                <div className="post-date">5 February 2025</div>
                <div className="read-time">5 min read</div>
            </div>
            <div className="post-title">
                How artificial intelligence is transforming industries in 2024
            </div>
            <div className="post-url">
                <a href="#">
                    Read More
                    <i className="ri-arrow-right-up-long-fill"></i>
                </a>
            </div>
        </div>
        <div className="blog-box">
            <div className="post-img">
                <img src={blogImg_3} alt="" />
            </div>
            <div className="post-date-time">
                <div className="post-date">5 February 2025</div>
                <div className="read-time">5 min read</div>
            </div>
            <div className="post-title">
                How artificial intelligence is transforming industries in 2024
            </div>
            <div className="post-url">
                <a href="#">
                    Read More
                    <i className="ri-arrow-right-up-long-fill"></i>
                </a>
            </div>
        </div>
        <div className="blog-box">
            <div className="post-img">
                <img src={blogImg_4} alt="" />
            </div>
            <div className="post-date-time">
                <div className="post-date">5 February 2025</div>
                <div className="read-time">5 min read</div>
            </div>
            <div className="post-title">
                How artificial intelligence is transforming industries in 2024
            </div>
            <div className="post-url">
                <a href="#">
                    Read More
                    <i className="ri-arrow-right-up-long-fill"></i>
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default blog
