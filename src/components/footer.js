import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  const location = useLocation();
  return (
    <div className="footer-footer">
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <Link to="/" className="footer-navlink">
              <img
                alt={props.pastedImageAlt}
                src="/screenshot/logo%20black%20bg-200h-200h.png"
                className="footer-pasted-image"
              />
            </Link>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/freelearn"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <div className="footer-social">
                <img
                  alt={props.insiderAlt}
                  src="/pastedimage-k0l6.svg"
                  className="footer-insider"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-links">
          
          <div className="footer-column1">
            <span className="footer-header1">{props.header1}</span>
            <Link to="/about" className="footer-link06">
              {props.link5}
            </Link>
            <Link to="/future" className="footer-link07">
              {props.link6}
            </Link>
            <Link to="/tandc" className="footer-link08">
              {props.link7}
            </Link>
            <Link to="/connect" className="footer-link09">
              {props.link8}
            </Link>
            <Link to="/challenges" className="footer-link10">
              {props.link9}
            </Link>
            <Link to="/privacypolicy" className="footer-link11">
              {props.link11}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  insiderSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/dc84e660-6f14-43e9-80e8-dbcb1fbaae0f?org_if_sml=11092',
  insiderAlt: 'pastedImage',
  link9: 'Challenges',
  link1: 'Responsive Prototypes',
  link: 'Responsive Web Design',
  link8: 'Connect With Us',
  link3: 'Static Website Builder',
  link10: 'Why Us?',
  header1: 'More',
  link11: 'Privacy Policy',
  pastedImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/99b28711-1d54-4589-9918-a73b8ad8556b?org_if_sml=15394',
  pastedImageAlt: 'pastedImage',
  link7: 'Terms & Conditions',
  link2: 'Design to Code',
  link5: 'About Us',
  header: 'Blogs',
  link6: 'Future Scope',
  link4: 'Static Website Generator',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  insiderSrc: PropTypes.string,
  insiderAlt: PropTypes.string,
  link9: PropTypes.string,
  link1: PropTypes.string,
  link: PropTypes.string,
  link8: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
  text1: PropTypes.string,
  header1: PropTypes.string,
  link11: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  link7: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
}

export default Footer
