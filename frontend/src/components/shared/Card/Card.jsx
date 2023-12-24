import React from 'react'
import styles from "./Card.module.css"

const Card = ({ title, icon, children }) => {
    return (
        <>

            <div className={`${styles.card}`}>
                <div className={`${styles.headingwrapper}`}>
                    <img src={`./images/${icon}.png`} alt="logo" />
                    <span className={`${styles.heading}`}>{title}</span>
                </div>
                {children}
            </div>
        </>
    )
}

export default Card
