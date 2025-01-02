import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const ColorKey = ({ groupA, groupB, groupC, groupD }) => {
  const keySorted =
    groupA || groupB || groupC || groupD ? (
      <div className="ColorKey__Item">
        <div className="ColorKey__Box ColorKey__Sorted"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="ColorKey__Item">
      </div>
    );

  const keyA = groupA ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupA"></div>
      <span>{groupA}</span>
    </div>
  ) : null;

  const keyB = groupB ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupB"></div>
      <span>{groupB}</span>
    </div>
  ) : null;

  const keyC = groupC ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupC"></div>
      <span>{groupC}</span>
    </div>
  ) : null;

  const keyD = groupD ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupD"></div>
      <span>{groupD}</span>
    </div>
  ) : null;

  return (
    <div className="ColorKey">
      
      <h3>If you're using a Phone, then go the menu and select the algorithm first.<br/></h3>
      <div>
        {keySorted}
        {keyA}
        {keyB}
        {keyC}
        {keyD}
      </div>
    </div>
  );
};

ColorKey.propTypes = {
  groupA: PropTypes.string,
  groupB: PropTypes.string,
  groupC: PropTypes.string,
  groupD: PropTypes.string
};

export default ColorKey;
