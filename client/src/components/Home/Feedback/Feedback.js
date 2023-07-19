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

            </div>
        </div>
    )
}

export default Feedback