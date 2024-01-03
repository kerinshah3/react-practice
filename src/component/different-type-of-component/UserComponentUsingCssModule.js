import React, { Component } from 'react'
import styles from '../../App.module.css'


class UserComponentWithClass extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.name}>Kerin shah</h1>
                <h2> 25 </h2>
                <h2> Kerinshah3@gmail.com</h2>
            </div>
        )
    }
}

export default UserComponentWithClass