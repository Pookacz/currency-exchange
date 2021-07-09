import React from 'react';
import styles from './Input.module.scss';

const Input = ({ ...props }) => {

    return(
        <input className={styles.wrapper} {...props}/>
    )
}

export default Input;