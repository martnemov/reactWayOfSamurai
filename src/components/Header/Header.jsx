import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return <header className={style.header}>
        <div>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react-logo"/>
        </div>
    </header>
}

export default Header;
