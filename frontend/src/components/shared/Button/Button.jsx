import React from 'react'
import styles from "./Button.module.css"

const Button = ({ btntext, OnClick }) => {
    return (
        <button onClick={OnClick} className={`${styles.buttons}`}>
            <span>{btntext}</span>
            <img className={`${styles.arror}`} src={`/images/arrow_forward.png`} alt="arrow" />
        </button>
    )
}

export default Button
