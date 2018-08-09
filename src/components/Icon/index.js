import React from 'react';
import PropTypes from 'prop-types';

// Requires svg-sprite-loader
import 'design-system/dist/svg/sprite.svg';

import './styles.scss';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.getCssClass = this.getCssClass.bind(this);
  }

  getCssClass() {
    const {className, name} = this.props;
    let cssClass = 'wds-icon';

    if (/-small$/.test(name)) {
      cssClass += ' wds-icon-small';
    } else if (/-tiny$/.test(name)) {
      cssClass += ' wds-icon-tiny';
    }

    if (className) {
      cssClass += ` ${className}`;
    }

    return cssClass;
  }

  render() {
    const {name} = this.props;
    return (
      <svg className={this.getCssClass()}>
        <use xlinkHref={`#wds-icons-${name}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  /**
   * Icon name
   */
  name: PropTypes.string.isRequired,
  /**
   * Additional class name
   */
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;

