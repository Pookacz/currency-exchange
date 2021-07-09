import React from 'react';
import styles from './Button.module.scss'


const Button = ({title, ...props}) => {

    return(
        <button className={styles.wrapper} {...props}>
            {title}
        </button>
    )
}

export default Button;