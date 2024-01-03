import React from "react";
import styles from '../../App.module.css'


function UserComponentWithProperty(property) {
    return (
        <div>
            <h1>{property.name}</h1>
            <h2> {property.email} </h2>
            <h2> {property.age}</h2>
            {property.age > 18 ? <h2 className={styles.goodAge}>Over 18 Good</h2> : <h2 className={styles.badAge}>Under 18 Not Good</h2>}
        </div>
    )
}

export default UserComponentWithProperty