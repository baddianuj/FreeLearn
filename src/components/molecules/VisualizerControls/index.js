import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

import {
  MdSkipPrevious as Backward,
  MdSkipNext as Forward,
  MdPause as Pause,
  MdPlayArrow as Play,
  MdRepeat as Repeat
} from 'react-icons/md';
import Button from '../../atoms/Button';
import Menu from '../Menu';

// Helper function
function isDisabled(action, disabled = false) {
  return action === undefined || disabled;
}

const VisualizerControls = ({
  // Actions
  onPlay,
  onPause,
  onBackward,
  onForward,
  onRepeat,
  onAdjustSpeed,

  // States
  playing,
  playDisabled,
  pauseDisabled,
  backwardDisabled,
  forwardDisabled,
  repeatDisabled,
  playbackSpeed
}) => {
  return (
    <div className="VisualizerControls">
      {/* Repeat */}
      <Button
        icon={Repeat}
        onClick={onRepeat}
        disabled={isDisabled(onRepeat, repeatDisabled)}
        className="VisualizerControls__Button1"
      />

      {/* Backward Button  */}
      <Button
        icon={Backward}
        onClick={onBackward}
        disabled={isDisabled(onBackward, backwardDisabled)}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      />

      {/* Play or Pause button - context dependent */}
      <Button
        icon={playing ? Pause : Play}
        onClick={playing ? onPause : onPlay}
        disabled={
          playing
            ? isDisabled(onPause, pauseDisabled)
            : isDisabled(onPlay, playDisabled)
        }
        raised
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__CenterButton"
      />

      {/* Forward Button  */}
      <Button
        icon={Forward}
        onClick={onForward}
        disabled={isDisabled(onForward, forwardDisabled)}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      />

      {/* Playback Speed */}
      <Menu
        items={['0.25x', '0.5x', '1x', '2x', '4x','8x']}
        placeholder="Speed"
        selected={`${playbackSpeed}x`}
        onSelect={onAdjustSpeed}
        noDropIcon
        className="VisualizerControls__SpeedButton"
      />
    </div>
  );
};

VisualizerControls.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onBackward: PropTypes.func,
  onForward: PropTypes.func,
  onRepeat: PropTypes.func,
  onAdjustSpeed: PropTypes.func,

  playing: PropTypes.bool,
  playDisabled: PropTypes.bool,
  pauseDisabled: PropTypes.bool,
  backwardDisabled: PropTypes.bool,
  forwardDisabled: PropTypes.bool,
  repeatDisabled: PropTypes.bool,
  playbackSpeed: PropTypes.number
};

export default VisualizerControls;
