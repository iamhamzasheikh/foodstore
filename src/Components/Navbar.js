import React from 'react'
import { Link } from 'react-router-dom'
import '../Assests/Navbar.css'

function Navbar() {
    return (
        <nav className='top-nav'>
            <div className="navbar-brand">
                <Link id='navbar-brand' style={{ textDecoration: 'none' }} to='/'>Food Store</Link>
            </div>
            <ul className='navbar-menu'>
                <li><Link className="navbar-link" to="/">Home</Link></li>
                <li><Link className="navbar-link" to="/features">Features</Link></li>
                <li><Link className="navbar-link" to="/products">Products</Link></li>
                <li><Link className="navbar-link" to="/catagories">Catagories</Link></li>
                <li><Link className="navbar-link" to='/review'>Review</Link></li>
                <li><Link className="navbar-link" to="/contact">Contact</Link></li>
            </ul>
            <div className="dropdown">
                <button className="dropdown-toggle"><span>Accounts &#9660;</span></button>
                    <ul className='dropdown-menu'>
                        <li><Link className='dropdown-link' to='/login'>Login</Link></li>
                        <li><Link className='dropdown-link' to='/signup'>Signup</Link></li>
                    </ul>
                
            </div>
        </nav>
    )
}

export default Navbar