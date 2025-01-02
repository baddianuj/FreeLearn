import React from 'react'

import PropTypes from 'prop-types'

import './review.css'

const Review = (props) => {
  return (
    <section className={`review-card ${props.rootClassName} `}>
      <main className="review-content">
        <p className="review-quote">{props.quote}</p>
        <div className="review-author">
          <div className="review-details">
            <h1 className="review-author1">{props.author}</h1>
            <label className="review-position">{props.position}</label>
          </div>
        </div>
      </main>
    </section>
  )
}

Review.defaultProps = {
  quote:
    '“Your Page is amazing but the Website is even better”',
  author: 'Vittal Katwe',
  position: 'Manager',
}

Review.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
}

export default Review
