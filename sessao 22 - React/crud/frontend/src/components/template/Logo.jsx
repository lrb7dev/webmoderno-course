import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
<aside className='logo'>
    <a href="/" className="logo">
        <img src={logo} alt='logo'></img>
    </a>
</aside>