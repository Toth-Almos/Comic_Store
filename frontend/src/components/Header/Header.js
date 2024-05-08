import React from 'react'
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Header() {
  
  const {user, logout } = useAuthentication();
  const { cart, removeAllFromCart } = useCart();

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to='/' className={classes.logo}>
                    Kaboom!
                </Link>
                <nav>
                        {user ? (
                            <ul>
                                <li className={classes.menu_container}>
                                    <Link to="/dashboard">{user}</Link>
                                    <div className={classes.menu}>
                                        {localStorage.getItem('isAdmin') === "true" ? (
                                            <a onClick={() => {logout(); removeAllFromCart()}}>Logout</a>
                                        ) : (
                                            <div>
                                                <Link to="/profile">Profile</Link>
                                                <Link to="/orders">Orders</Link>
                                                <a onClick={() => {logout(); removeAllFromCart()}}>Logout</a>
                                            </div>
                                        )}                                        
                                    </div>
                                </li>
                                <li>
                                    {localStorage.getItem('isAdmin') === "true" ? (
                                        <Link to="/admin">Manage Comics</Link>
                                    ) : (
                                        <Link to="/cart">
                                        Cart
                                        {cart.totalCount > 0 && (
                                        <span className={cart.totalCount}> ({cart.totalCount})</span>
                                        )}
                                    </Link>
                                    )}                                  
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <Link to="/login">Login</Link>
                            </ul>
                        )}  
                </nav>
            </div>
        </header>
    );
}
