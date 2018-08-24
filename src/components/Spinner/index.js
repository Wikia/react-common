import React from 'react';
import PropTypes from 'prop-types';
import withTimeoutFallback from '../../hocs/withTimeoutFallback';

import './styles.scss';

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */
const Spinner = ({
  className,
  size,
  stroke,
  block,
  inline,
}) => {
  const style = {
    width: size,
    height: size,
  };

  const r = (size - stroke) / 2;
  const translate = r + (stroke / 2);
  const dash = 2 * Math.PI * r;
  const classes = ['fandom-spinner'];

  if (block) {
    classes.push('is-block');
  }

  if (inline) {
    classes.push('is-inline');
  }

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')} style={style}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`translate(${translate}, ${translate})`}>
          <circle
            fill="none"
            strokeWidth={stroke}
            strokeDasharray={dash}
            strokeDashoffset={dash}
            strokeLinecap="round"
            r={r}
          />
        </g>
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Loader size
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Stroke width
   */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Display block and center
   */
  block: PropTypes.bool,
  /**
   * Display contentinline based on line height
   */
  inline: PropTypes.bool,
};

Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2,
  block: false,
  inline: false,
};

export default withTimeoutFallback(Spinner, {timeout: 30000});
