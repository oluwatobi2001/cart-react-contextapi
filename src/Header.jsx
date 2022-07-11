import React , {useContext} from 'react'
import {Carty} from './Context'
import { Link } from  'react-router-dom';

const Header = () => {
    const {cart } = useContext(Carty)
    return (
<div className="header">
    <span> React Context Api Tutorial</span>

<ul className="nav">
<li className="prod">
<Link to="/"> Home Page</Link>
</li>
<li className="prod1">
    <Link to="/Cart">Cart ({cart.length})</Link>
</li>
</ul>
</div>
    )
}

export default Header;