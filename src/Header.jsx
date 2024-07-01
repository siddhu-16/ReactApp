import React from 'react';
import {  NavLink } from 'react-router-dom';
function Header() {
    return (
        <div>
            <header className="shadow sticky z-50 top-0">
                <div >
                    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to='/' className={({ isActive }) =>
                                        `${isActive ? "text-orange-500" : "text-gray-500"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='inc' className={({ isActive }) =>
                                        `${isActive ? "text-orange-500" : "text-gray-500"}`
                                    }
                                >
                                    Increment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/passgen' className={({ isActive }) =>
                                        `${isActive ? "text-orange-500" : "text-gray-500"}`
                                    }
                                >
                                    Password Generator
                                </NavLink>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
import { Link } from 'react-router-dom';

export default Header;