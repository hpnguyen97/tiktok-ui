import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    className,
    primary = false,
    outline = false,
    outlinewhite = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        outlinewhite,
        disabled,
        rounded,
        [className]: className,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
