import React from "react"
import styles from './notFoundBlock.module.scss'

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br /> Page not found
            </h1>
            <p className={styles.description}>Unfortunately, we can't find the page you were looking for.</p>
        </div>
    )
}

export default NotFoundBlock
