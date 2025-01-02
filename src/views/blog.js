import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="future-container">
      <Helmet>
        <title>Blogs | FreeLearn</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Blogs | FreeLearn" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="future-hero">
        <header className="future-heading">
          <div id="notifcation" className="future-notification">
            <Announcement
              rootClassName="announcement-root-class-name5"
              className="future-component"
            ></Announcement>
          </div>
          <Navbar></Navbar>
        </header>
      </div>
      <div className="blog-video">
        <h1 className="blog-h1">
          <b>Our Blogs</b>
        </h1>

      </div>
      <div className="future-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default Blog
