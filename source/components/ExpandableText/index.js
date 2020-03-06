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
export default class ExpandableText extends React.Component {
    static propTypes = {
        /** Additional class name */
        characterLimit: PropTypes.number.isRequired,
        /** Character limit */
        className: PropTypes.string,
        /** Ellipsis (defaults to `&hellip;`) */
        ellipsis: PropTypes.string,
        /** Additional class name for the expand button */
        expandClassName: PropTypes.string,
        /** Label used on the expand button */
        expandLabel: PropTypes.string.isRequired,
        /** Full text to display */
        text: PropTypes.string.isRequired,
    }

    static defaultProps = {
        className: '',
        ellipsis: '\u2026',
        expandClassName: '',
    }

    constructor(props) {
        super(props);

        const shortText = makeShortText(props.text, props.characterLimit);

        this.state = {
            isExpandable: shortText.length < props.text.length,
            isExpanded: false,
            shortText,
        };
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        const shortText = makeShortText(newProps.text, newProps.characterLimit);

        this.setState({
            isExpandable: shortText.length < newProps.text.length,
            isExpanded: false,
            shortText,
        });
    }

    handleExpandClick = () => {
        this.setState({
            isExpandable: false,
            isExpanded: true,
        });
    }

    renderExpandBlock() {
        const {
            ellipsis,
            expandLabel,
            expandClassName,
        } = this.props;

        return (
            <span>
                {ellipsis}
                &nbsp;
                <button
                    className={`expandable-text__expand ${expandClassName}`}
                    onClick={this.handleExpandClick}
                >
                    {expandLabel}
                </button>
            </span>
        );
    }

    renderText() {
        const {
            text,
        } = this.props;

        const {
            isExpanded,
            shortText,
        } = this.state;

        return isExpanded ? text : shortText;
    }

    render() {
        const {
            className,
        } = this.props;

        const {
            isExpandable,
        } = this.state;

        return (
            <span className={`expandable-text ${className}`}>
                {this.renderText()}
                {isExpandable && this.renderExpandBlock()}
            </span>
        );
    }
}
