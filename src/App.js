import { useState } from 'react';

import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';





function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon={<PlusIcon/>}/>
        <NavItem icon={<BellIcon/>}/>
        <NavItem icon={<MessengerIcon/>}/>
        <NavItem icon={<CaretIcon/>}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
    
  );
}

function Navbar(props) {
  return (<nav className="navbar">
    <ul className="navbar-nav">
      {props.children}
    </ul>
  </nav> );
}

function NavItem(props) {
  const [ open, setOpen ] = useState(false);

  return (<li className="nav-item">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
    <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
      {props.icon}
    </a>

    {open && props.children}
  </li>)
}

function DropdownMenu() {

  function DropDownItem(props) {
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    return (<a href="" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )

  }
  return (
    <div className="dropdown">
      <DropDownItem>My Profile</DropDownItem>
      <DropDownItem
        leftIcon={<CogIcon/>}
        rightIcon={<ChevronIcon/>}>
          Settings
        </DropDownItem>
    </div>
  )
}


export default App;
