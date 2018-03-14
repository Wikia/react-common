import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../utils/colors';

import './styles.css';

/**
 * Video Play icon
 */
const VideoPlayIcon = ({
  backgroundColor,
  className,
  color,
  size,
  shadowColor,
}) => {
  const style = {
    height: size,
    width: size,
  };

  return (
    <svg
      className={`fandom-video-play-icon ${className}`}
      style={style}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <rect id="fandom-video-play-icon_b" width="150" height="150" rx="75" />
        <filter
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          filterUnits="objectBoundingBox"
          id="fandom-video-play-icon_a"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="7.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g className="fandom-video-play-icon__circle" opacity=".9" transform="rotate(90 75 90)">
          <use fill={shadowColor} filter="url(#fandom-video-play-icon_a)" xlinkHref="#fandom-video-play-icon_b" />
          <use fill={backgroundColor} xlinkHref="#fandom-video-play-icon_b" />
        </g>
        <path
          d="M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.635 1.496
          9.748a6.91 6.91 0 0 1-1.497 1.527l-34.318 25.523c-3.053
          2.27-7.332 1.586-9.558-1.527A7.07 7.07 0 0 1 70
          114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.449 0
          2.86.469 4.03 1.34z"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

VideoPlayIcon.propTypes = {
  /**
   * Background color
   */
  backgroundColor: PropTypes.string,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Main color
   */
  color: PropTypes.string,
  /**
   * Icon size
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Shadow color
   */
  shadowColor: PropTypes.string,
};

VideoPlayIcon.defaultProps = {
  backgroundColor: '#fff',
  className: '',
  color: colors.FANDOM_COLOR_AQUA,
  size: 90,
  shadowColor: '#000',
};

export default VideoPlayIcon;
