import React from 'react'

import PropTypes from 'prop-types'

import './overlay.css'

const Overlay = (props) => {
  return (
    <div className="overlay-overlay">
      <span className="overlay-text">{props.text}</span>
      <div className="overlay-book-btn">
        <span className="overlay-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Overlay.defaultProps = {
  text: 'Begin your financial journey on finbest',
  text1: 'Book a demo',
}

Overlay.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Overlay
