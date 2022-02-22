import { useState } from 'react';

import './NavLink.css';

export function NavLink(props) {
    const [selected, setSelected ] = useState(false);

    return (<li className="nav-link">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
    <a href="#" className="link-button" onClick={()=> setSelected(!selected)}>
      {props.icon}
    </a>
  </li>)
}