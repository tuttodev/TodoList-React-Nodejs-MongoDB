import React from 'react';

import './style.css'

const Header = () => {
    return(
        <header>
            <nav className='navbar navbar-expand bg-dark'>
                <div className='container'>
                    <a className='navbar-brand text-white' href='/'>TodoList</a>
                </div>
            </nav>
        </header>
    )
}   

export default Header;