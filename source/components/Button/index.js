import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/**
 * Basic button component
 */
const Button = ({
    className,
    href,
    text,
    secondary,
    square,
    fullwidth,
    children,
    ...rest
}) => {
    const classes = [
        'wds-button',
        className,
        secondary ? 'wds-is-secondary' : '',
        square ? 'wds-is-square' : '',
        text ? 'wds-is-text' : '',
        fullwidth ? 'wds-is-fullwidth' : '',
    ].filter(c => c).join(' ');

    if (href) {
        return <a href={href} className={classes} {...rest}>{children}</a>;
    }

    return <button className={classes} {...rest}>{children}</button>;
};

Button.propTypes = {
    /** @ignore */
    children: PropTypes.node,
    /** Additional class name */
    className: PropTypes.string,
    /** Disabled attribute for the `<button>` */
    disabled: PropTypes.bool,
    /** Full width flag */
    fullwidth: PropTypes.bool,
    /** href attribute - `<Button/>` uses `<a>` tag if it's present */
    href: PropTypes.string,
    /** Callback for the `<button>` */
    onClick: PropTypes.func,
    /** Secondary flag */
    secondary: PropTypes.bool,
    /** Square flag */
    square: PropTypes.bool,
    /** Text flag */
    text: PropTypes.bool,
};

Button.defaultProps = {
    children: null,
    className: '',
    disabled: false,
    fullwidth: false,
    href: null,
    secondary: false,
    square: false,
    text: false,
    onClick: () => {},
};

export default Button;
