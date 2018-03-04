import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../utils/colors';

import './styles.css';

/**
 * Fandom Loader
 */
const FandomLoader = ({
  className,
  color,
  size,
  stroke,
}) => {
  const classes = [
    className === false ? '' : className,
  ];

  const style = {
    width: size,
    height: size,
  };

  const r = (size - stroke) / 2;
  const translate = r + (stroke / 2);
  const dash = 2 * Math.PI * r;

  return (
    <div className={`fandom-loader ${classes}`} style={style}>
      <svg
        className="wds-spinner"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`translate(${translate}, ${translate})`}>
          <circle
            className="wds-spinner__stroke"
            fill="none"
            strokeWidth={stroke}
            strokeDasharray={dash}
            strokeDashoffset={dash}
            strokeLinecap="round"
            stroke={color}
            r={r}
          />
        </g>
      </svg>
    </div>
  );
};

FandomLoader.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])]),
  /**
   * Loader size
   */
  size: PropTypes.number,
  /**
   * Stroke width
   */
  stroke: PropTypes.number,
  /**
   * Stroke color
   */
  color: PropTypes.string,
};

FandomLoader.defaultProps = {
  className: false,
  size: 30,
  stroke: 2,
  color: colors.WDS_COLOR_LINK,
};

export default FandomLoader;
