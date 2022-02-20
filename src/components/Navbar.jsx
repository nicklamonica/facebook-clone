import { NavItem } from './NavItem';
import { DropdownMenu } from './DropDownMenu';


import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';

import './Navbar.css';


export function Navbar(props) {
    return (<nav className="navbar">
      <ul className="navbar-right">
        <NavItem icon={<PlusIcon/>}/>
      </ul>
      <ul className="navbar-center">
        <NavItem icon={<PlusIcon/>}/>
        <NavItem icon={<BellIcon/>}/>
        <NavItem icon={<MessengerIcon/>}/>
      </ul>
      <ul className="navbar-left">
        <NavItem icon={<PlusIcon/>}/>
        <NavItem icon={<BellIcon/>}/>
        <NavItem icon={<MessengerIcon/>}/>
        <NavItem icon={<CaretIcon/>}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav> );
  }