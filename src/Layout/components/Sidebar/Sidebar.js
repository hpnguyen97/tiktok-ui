import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import { HomeIcon, HomeActiveIcon, UserIcon, UserActiveIcon, LiveIcon, LiveActiveIcon } from '~/Components/Icons/Icon';
import config from '~/config';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/Components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserIcon />}
                    activeIcon={<UserActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
