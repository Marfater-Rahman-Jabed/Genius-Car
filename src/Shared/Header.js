import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, Logout } = useContext(AuthContext);
    const handleLoggedOut = () => {

        Logout()
            .then(result => {

            })
            .catch(error => console.log(error))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li >
            <a href="/" className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><Link to='/orders'>orders</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
            </ul>
        </li>
        <li><Link to='/signup'>SignUp</Link></li>
        {user?.email ?
            <>
                <li><Link to='/orders'>Orders</Link></li>

                <button onClick={handleLoggedOut}><li>LogOut</li></button>
            </>
            :
            <li><Link to='/login'>Login</Link></li>}

    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold	">
                        {menuItems}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold	">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a href="/" className="btn">Get started</a> */}
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;