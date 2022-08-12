import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faEarthAsia,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';

import routesConfig from '~/config/routes';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/menu';
import { Message, Notification } from '~/Components/Icons';
import Image from '~/Components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/nguyenvana',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tik-Tok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button outlinewhite>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Upload</span>
                            </Button>
                            <Tippy placement="bottom" duration={[0, 300]} content="Message">
                                <button className={cx('action-btn')} style={{ marginLeft: '10px' }}>
                                    <Message />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" duration={[0, 300]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <Notification />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outlinewhite>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/394569a381105700a3709c398be7d99e~c5_100x100.jpeg?x-expires=1659542400&x-signature=7OWrQrRp4%2Fnrfy8ae732hQRwD70%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
