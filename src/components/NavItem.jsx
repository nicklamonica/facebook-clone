import { useState } from 'react';
import './NavItem.css';



export function NavItem(props) {
    const [ open, setOpen ] = useState(false);
  
    return (<li className="nav-item">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
      <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>)
  }