import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/Layout/components/Header/Header';
import Sidebar from '~/Layout/components/Sidebar/Sidebar';
import styles from './DefaultLayouts.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
