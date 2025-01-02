import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './challenges.css'

const Challenges = (props) => {
  return (
    <div className="challenges-container">
      <Helmet>
        <title>Challenges | FreeLearn</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Challenges | FreeLearn" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="challenges-hero">
        <header className="challenges-heading">
          <div id="notifcation" className="challenges-notification">
            <Announcement
              rootClassName="announcement-root-class-name7"
              className="challenges-component"
            ></Announcement>
          </div>
          <Navbar></Navbar>
        </header>
      <div className="challenges-content">
          <h2 className="challenges-text">Challenges Faced</h2>
          <div className="challenges-highlight">
            <span className="challenges-text01">
              <span>
                As a newbie I always felt DSA isn&apos;t my cup of tea, I
                thought I will never able to learn DSA, but time did change i
                got to know visualiser that helps understand the working of the
                algorithm s. But I did face difficulties, which were
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                The graphics of the visualiser was not visually appealing which
                made it too boring.
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                There were indicator that the number are being sorted which made
                it difficult to know the working.
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                Also there were no indicators towards the number that were
                sorted.
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                The lack of algorithms, most of the visualiser only had the
                basic 5 algorithms (Bubble Sort, Insertion Sort, Selection Sort,
                Quick Sort, Merge Sort) and the visualisers which had the other
                algorithms had terrible graphics.
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                After understanding the sorting visualiser, I thought lets go
                ahead with Path Finding Algorithm Visualiser, I initially
                thought that, in path finding visualiser there must be a map and
                we need to find the source and destination but I was so
                disappointed after checking a few path finding visualisers I got
                to know, there are no such visualiser available. 
              </span>
              <br></br>
              <br></br>
              <span>
                Then I got an idea, instead of looking for visualiser, I 
                thought why don&apos;t we build one, not with the intention to
                earn money but to help other don&apos;t face the problems as i
                did.
              </span>
              <br></br>
              <br></br>
              <span>
                So, This is the story behind FreeLearn. Lets make more
                memories together. Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.instagram.com/FreeLearn/"
                target="_blank"
                rel="noreferrer noopener"
                className="challenges-link"
              >
                @FreeLearn
              </a>
              <span> to join us, and make the adventure more special.</span>
              <br></br>
            </span>
          </div>
        </div>
        
      </div>
      <div className="challenges-video"></div>
      <div className="challenges-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default Challenges
