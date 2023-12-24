import React from 'react'
import styles from "./Navigation.module.css"
import { Link } from 'react-router-dom'


const Navigation = () => {
    const brandStyle = {
        "color": "#fff",
        "textDecoration": "none",
        "fontWeight": "bold",
        "fontSize": "22px",
        "fisplay": "flex",
        alignItems: "center"

    }

    const logoText = {
        marginLeft: "10px"
    }
    return (
        <>
            <nav className={`container ${styles.navbar}`}>
                <Link style={brandStyle} to={"/"} >
                    <img src='/images/logo.png' alt='logo img' />
                    <span id='logotext'>Coderhouse</span>
                </Link>
            </nav>
        </>
    )
}

export default Navigation
