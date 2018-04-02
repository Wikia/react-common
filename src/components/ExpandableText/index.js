import React from 'react';
import PropTypes from 'prop-types';

import makeShortText from './helper';

import './styles.scss';

/**
 * ExpandableText component can be used to temporarily limit text showed to the user.
 * It has a button used to fully expand the text.
 * If the source text is shorter than the limit the button do not show.
 *
 * Both button label and string used to ellipsis has to be configured.
 * Button and the text itself can be syled with classes passed to the component.
 */
class ExpandableText extends React.Component {
  constructor(props) {
    super(props);

    this.handleExpandClick = this.handleExpandClick.bind(this);

    const text = makeShortText(props.text, props.characterLimit);
    this.state = {
      isExpandable: text.length < props.text.length,
      isExpanded: false,
      text,
    };
  }

  componentWillReceiveProps(newProps) {
    const text = makeShortText(newProps.text, newProps.characterLimit);
    this.setState({
      isExpandable: text.length < newProps.text.length,
      isExpanded: false,
      text,
    });
  }

  handleExpandClick() {
    this.setState({
      isExpandable: false,
      isExpanded: true,
    });
  }

  render() {
    const expandBlock = (<span>
      {this.props.ellipsis}&nbsp;
      <button
        className={`expandable-text__expand ${this.props.expandClassName}`}
        onClick={this.handleExpandClick}
      >
        {this.props.expandLabel}
      </button>
    </span>);

    return (
      <span className={`expandable-text ${this.props.className}`}>
        {this.state.isExpanded ? this.props.text : this.state.text}
        {this.state.isExpandable && expandBlock}
      </span>
    );
  }
}

ExpandableText.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Character limit
   */
  characterLimit: PropTypes.number.isRequired,
  /**
   * Ellipsis (defaults to `&hellip;`)
   */
  ellipsis: PropTypes.string,
  /**
   * Additional class name for the expand button
   */
  expandClassName: PropTypes.string,
  /**
   * Label used on the expand button
   */
  expandLabel: PropTypes.string.isRequired,
  /**
   * Full text to display
   */
  text: PropTypes.string.isRequired,
};

ExpandableText.defaultProps = {
  className: '',
  ellipsis: '\u2026',
  expandClassName: '',
};

export default ExpandableText;
