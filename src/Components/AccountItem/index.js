import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/394569a381105700a3709c398be7d99e~c5_100x100.jpeg?x-expires=1659542400&x-signature=7OWrQrRp4%2Fnrfy8ae732hQRwD70%3D"
                alt="abc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyenvana</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </div>
    );
}

export default AccountItem;
