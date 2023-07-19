import styles from "./Feedback.module.css"
import { useState } from 'react'


function Feedback (){
    const [isActiveFeedback, setIsActiveFeedback] = useState(false)

    return (
        <div className={styles["feedback-container"]}>
            <div className={styles["feedback-button"]}>
                <span className={styles["feedback-button-text"]}>feedback</span>
            </div>
            <div className={styles["feedback-form-container"]}>
                <input placeholder="yourmailname@gmail.com" className={`${styles["feedback-email-input"]} ${styles["feedback-input"]}`} required type="email"/>
                <textarea placeholder="write your opinion about the site" className={`${styles["feedback-description-input"]} ${styles["feedback-input"]}`} required/>
            </div>
        </div>
    )
}

export default Feedback