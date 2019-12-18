import React from 'react'
import './NavBar.scss'

export default function NavBar() {
    return(
        <nav>
            <p>id-this.com</p> 
            <div className="nav-items-wrapper">
                <a href="#">about</a>
                <a href="#">contact</a>
            </div>
        </nav>
    )
}
