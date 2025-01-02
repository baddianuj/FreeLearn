import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './future.css'

const Future = (props) => {
  return (
    <div className="future-container">
      <Helmet>
        <title>Future Scope | FreeLearn</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Future Scope | FreeLearn" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="future-hero">
        <header className="future-heading">
          {/* <div id="notifcation" className="future-notification">
            <Announcement
              rootClassName="announcement-root-class-name5"
              className="future-component"
            ></Announcement>
          </div> */}
          <Navbar></Navbar>
        </header>
      </div>
      <div className='future-content'>
      <h2 className="about-text">
            <span>Future Scope & Updates</span>
          </h2>
          <div className="about-highlight">
            <span className="about-text04">
              <span className="about-text000">
              <b className='version-text'>Current - v1.0.0</b>
              <br></br>
              <br></br>
              • Added list methods (Append, Pop, Index, Reverse, Insert, AppendLeft)
              <br></br>
              • Added rarely used sorting algorithms in the sorting visualiser (Bogo Sort, Stooge Sort, Shell Sort, Quick Sort3)
              <br></br>
              • Added path finding visualiser feature with 6 initial algorithms (Dijkstra, Greedy, Bidirectional, A*, DFS, BFS)
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
              <span className="about-text000">
              <b className='version-text'>Next - v1.0.1</b>
              <br></br>
              <br></br>
              • Planning to add stack and queue operations in list methods
              <br></br>
              • Planning to add customization in path finding visualiser, this feature helps users to change the color of paths and nodes.
              <br></br>
              • Planning to add unique algorithms in the sorting visualiser.
              <br></br>
              • To make the design more user friendly and make the user experience better.
              </span>
            </span>
          </div>
          </div>
      <div className="future-banner-container"></div>
                                <Footer1></Footer1>
    </div>
  )
}

export default Future
