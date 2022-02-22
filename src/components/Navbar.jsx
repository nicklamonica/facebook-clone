import { NavItem } from './NavItem';
import { NavLink } from './NavLink';


import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as WatchIcon } from '../icons/watch.svg';
import { ReactComponent as MarketplaceIcon } from '../icons/marketplace.svg';
import { ReactComponent as GroupsIcon } from '../icons/groups.svg';
import { ReactComponent as GamingIcon } from '../icons/gaming.svg';

import './Navbar.css';


export function Navbar(props) {
    return (<nav className="navbar">
      <ul className="navbar-right">
        <NavItem icon={"F"}/>
      </ul>
      <ul className="navbar-center">
        <NavLink icon={<HomeIcon/>}/>
        <NavLink icon={<WatchIcon/>}/>
        <NavLink icon={<MarketplaceIcon/>}/>
        <NavLink icon={<GroupsIcon/>}/>
        <NavLink icon={<GamingIcon/>}/>
      </ul>
      <ul className="navbar-left">
        <NavItem icon={<PlusIcon/>}/>
        <NavItem icon={<BellIcon/>}/>
        <NavItem icon={<MessengerIcon/>}/>
        <NavItem icon={<CaretIcon/>} hasDropdown={true}/>
      </ul>
    </nav> );
  }