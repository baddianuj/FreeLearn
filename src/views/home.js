import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { ReactComponent as CircleIcon } from './circle.svg'; 
import Announcement from '../components/announcement'
import Feature from '../components/feature'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import Review from '../components/review'
import './home.css'

const Home = (props) => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div className="home-container">
      {/* <button className="circle-button" onClick={() => window.open('https://buymeacoffee.com/FreeLearn/e/272150', '_blank')}>
        <CircleIcon/>
      </button> */}

      <Helmet>
        <title>FreeLearn</title>
        <meta name="description" content="Bored of the same old DSA videos, try FreeLearn and understand the algorithms using visualisers with ease." />
        <meta property="og:title" content="FreeLearn" />
        <meta property="og:description" content="FreeLearn is just not another basic DSA website, instead it particularly focuses on DSA and the primary goal is to help users understand the sorting algorithms and path finding algorithms." />
      </Helmet>
      <div className="home-hero">
        <header className="home-heading">
          {/* <div id="notifcation" className="home-notification">
            <Link to="/">
              <Announcement
                rootClassName="announcement-root-class-name"
                className="home-component"
              ></Announcement>
            </Link>
          </div> */}
          <Navbar></Navbar>
        </header>
        
        <div className="home-content">
          <div className="home-content1">
            <h1 className="home-title">
              <span className="home-text">
                The fastest
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text01"></br>
              <span className="home-text02">way to learn</span>
              <br className="home-text03"></br>
              <span className="home-text04">DATA STRUCTURES</span>
              <br className="home-text05"></br>
              <span className="home-text06">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text07">&amp;</span>
              <span className="home-text08"> ALGORITHMS</span>
              <br className="home-text09"></br>
              <br className="home-text10"></br>
            </h1>
          </div>
          {/* <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="/screenshot/screenshot%202024-06-02%20225754-1000h.png"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="/screenshot/screenshot%202024-06-02%20225342-1000h.png"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/screenshot/screenshot%202024-06-02%20225954-1000h.png"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/screenshot/screenshot%202024-06-02%20230032-1000h.png"
                className="home-pasted-image3"
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="home-video">
        <div className="home-content2">
          <div className="home-header">
            <h2 className="home-text11">
              <span>
                Built specifically for people who want to learn
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13">DSA</span>
              <span> faster</span>
            </h2>
          </div>
          <div className="home-video-container">
            {/* <video
              ref={videoRef}
              src="/introvideo.mp4"
              loop
              poster="/videocover.png"
              className="home-video1"
            ></video>
            <div className="video-controls">
              <button onClick={togglePlay}>
                {isPlaying ? (  
                  <span>&#10074;&#10074;</span> // Pause icon (double vertical bars)
                ) : (
                  <span>&#9658;</span> // Play icon (right-pointing triangle)
                )}
              </button>
            </div> */}
            {/* <div className="home-heading-container">
              <div className="home-heading1">
                <span className="home-text15">
                  Video Manual for the Website
                </span>
              </div>
              <Link to="/list" className="home-navlink1">
                <div className="home-explore">
                  <span className="home-text16">
                    Learn Listing Methods -&gt;
                  </span>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>    
      <div className="home-features">
        <div className="home-header1">
          <div className="home-tag">
            <span className="home-text17">Features</span>
          </div>
          <div className="home-heading2">
            <h2 className="home-text18">
              <span className="home-text19">
                Everything you get with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>FreeLearn</span>
            </h2>
            <span className="home-text21">
              <span>
                Here are a list of features, we offer.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text23"></br>
              <span className="home-text24">Click to use.</span>
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <Link to="/list" className="home-navlink2">
            <Feature
              title="List Methods of  DSA Python"
              thumbnail="/vector6113-r6dl.svg"
              description="Learn listing methods with the help of our new feature which has all the listing methods.  "
              className="home-component2"
            ></Feature>
          </Link>
          <Link to="/sorting" className="home-navlink1">
          <Feature
            title="Sorting Algorithm Visualisation"
            thumbnail="/vector6113-6zj.svg"
            description="Learning Sorting Algorithms gets easy when there is a personalized sorting visualiser."
          ></Feature>
          </Link>
          <Link to= "/path" className="home-link">
            <Feature
              title="Path  Finding                         Visualisation"
              thumbnail="/vector6114-6m1e.svg"
              description="See how path finding algorithms work with the help of our path finding visualiser."
              className="home-component4"
            ></Feature>
          </Link>
          <Feature
            title="and many more to come."
            thumbnail="/vector6114-yjl.svg"
            description="Tired of the same boring features, don't worry there is a lot to come yet. Stay Tuned."
          ></Feature>
        </div>
      </div>
      <div className="home-banner-container">
        
      <section className="home-sectionyo">
        <header className="home-headeryo">
          <header className="home-yoyo">
            <div className="home-container1yo">
              <div className="home-tagyo">
                <span className="home-textyo">Feedback</span>
              </div>
            </div>
            <h2 className="home-headingyo section-headingyo">
              What users say about us
            </h2>
          </header>
          <p className="home-paragraphyo section-description">
            <span>
              Message us your feedback on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.instagram.com/FreeLearn"
              target="_blank"
              rel="noreferrer noopener"
              className="home-linkyo"
            >
              Instagram
            </a>
            <span> to get featured.</span>
          </p>
          <div className="home-rightyo"></div>
        </header>
        <main className="home-cardsyo">
          <div className="home-container2yo">
            <Review
              rootClassName="review-root-class-name"
              quote='"I really appreciate your work, you work is really impressive and helps me understand the algorithms of AIML. Great Work, Keep Doing."'
              author="Nirajan"
              position="Student"
            ></Review>
            <Review
              quote='"The Website is good, but the UI could be improved, especially the button texts which should show some loaders ideally, as it get ambiguous when the buttons are not displaying proper text."'
              rootClassName="review-root-class-name"
              author="Prashant Singh"
              position="Full Stack Developer"
            ></Review>
          </div>
          <div className="home-container3yo">
            <Review
              quote='"Algorithm work without any bugs, and works perfectly. I really like the easy and friendly user interface, easy to access settings, tutorials and area radius."'
              rootClassName="review-root-class-name"
              author="Ondrej Viklicky"
              position="Software Developer"
            ></Review>
            <Review
              quote='"Super Cool. Honestly, I love the animation and having different algorithms. Work on middle points for the path finding visualiser. It&apos;s super good."'
              rootClassName="review-root-class-name"
              author="Eilon"
              position="Tech Enthusiast"
            ></Review>
          </div>
          <div className="home-container4yo">
            <Review
              quote='"The Tokyo map is the best in my opinion, as it has got so much branching visualisation."'
              rootClassName="review-root-class-name"
              author="Aryan Vijaykumar"
              position="Artist"
            ></Review>
            <Review
              quote='"UI looks good. Everything looks very user friendly and simple. Design is professional. List methods feature is really cool. I like how its optimised for mobiles. Great Work, I can make something similar for my college project."'
              rootClassName="review-root-class-name"
              author="Amay"
              position="Corporate Employee"
            ></Review>
          </div>
        </main>
      </section>
      </div>
      <div className="home-faq">
        <div className="home-content3">
          <div className="home-header2">
            <div className="home-tag1">
              <span className="home-text25">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading3">
              <h2 className="home-text28">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column3">
              <div className="Question">
                <span className="home-title1">
                  What is the need for FreeLearn?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description">
                  FreeLearn helps user's in learning Data Structures and Algorithms with the help visualisers which are personalized as per the user needs.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="Question">
                <span className="home-title2">
                  What all features does FreeLearn offer?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description1">
                  <span>
                    As of now, FreeLearn offers three features which are List Methods (No one has ever made anything that ease up the list method learning), Sorting Algorithm Visualiser (Which not only has the basic algorithm but the rare used ones as well), Path Finding Algorithm Visualiser (Has 6 algorithms as of now).
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-question2 Question">
                <span className="home-title3">
                  How does this website benefit FreeLearn?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description2">
                  The simple answer is that it doesn't, FreeLearn earns no money from the website except for the ads, you can support FreeLearn by clicking on any of the ads (It will cost you nothing).
                </span>
              </div>
            </div>
            <div className="home-column4">
              <div className="home-question3 Question">
                <span className="home-title4">
                  On what all social media handles is FreeLearn available?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description3">
                  As of now, FreeLearn is only available on Instagram.
                </span>
              </div>
              <div className="home-question4 Question">
                <span className="home-title5">
                  What are the future additions in this website?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description4">
                  Planning to add more algorithms in both Sorting Visualiser & Path Finding Visualiser, and other feature that could help users learn Data Structure & Algorithms.
                </span>
              </div>
              <div className="home-question5 Question">
                <span className="home-title6">
                  What is the need for the visualiser?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description5">
                  <span>
                    Visualiser play a vital role in making you understand how an algorithm works, be it sorting algorithm visualiser or path finding algorithm visualiser.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-explore1">
            <Link to="/blog">
            <span className="home-text35">
              <span>
                Our Blogs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text37">-&gt;</span>
            </span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer1 rootClassName="footer1-root-class-name"></Footer1>
    </div>
  )                                                                             
}

export default Home
