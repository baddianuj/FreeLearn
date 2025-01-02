import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './announcement.css'

const Announcement = (props) => {
  return (
    <div className={`announcement-announcement ${props.rootClassName} `}>
      <span className="announcement-title">{props.title}</span>
      <Link to="/tandc" className="announcement-navlink">
        <div className="announcement-button">
          <span className="announcement-button-text">{props.button}</span>
        </div>
      </Link>
    </div>
  )
}

Announcement.defaultProps = {
  title: 'We updated our Terms and Conditions.\n',
  rootClassName: '',
  button: 'See now ->',
}

Announcement.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Announcement
