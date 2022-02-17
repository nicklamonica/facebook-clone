import { useEffect, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
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

  const [ activeMenu, setActiveMenu ] = useState('main');
  const [ menuHeight, setMenuHeight ] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  useEffect(() => {
    console.log(menuHeight);
  }, [menuHeight]);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    return (<a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" stlye={{height: menuHeight}} ref={dropdownRef}>
      <CSSTransition key={1} in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="settings">
              Settings
          </DropDownItem>
        </div>
        </CSSTransition>
        <CSSTransition key={2} in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Animals</h2>
            </DropDownItem>
            <DropDownItem leftIcon="🦘">Kangaroo</DropDownItem>
            <DropDownItem leftIcon="🐸">Frog</DropDownItem>
            <DropDownItem leftIcon="🦋">Horse?</DropDownItem>
            <DropDownItem leftIcon="🦔">Hedgehog</DropDownItem>
        </div>
        </CSSTransition>
    </div>
  )
}


export default App;
