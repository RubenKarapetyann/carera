import styles from "./Feedback.module.css"
import { useState } from 'react'


function Feedback (){
    const [isActiveFeedback, setIsActiveFeedback] = useState(false)
    const [inputData,setInputData] = useState({
        email : "",
        description : ""
    })


    const feedbackBtnHandle = ()=>setIsActiveFeedback(prev=>!prev)
    const emailChangeHandle = e =>setInputData(data=>({...data,email : e.target.value}))
    const descriptionChangeHandle = e =>setInputData(data=>({...data,description : e.target.value}))
    return (
        <div className={styles["feedback-container"]}>
            <div className={styles["feedback-button"]} onClick={feedbackBtnHandle}>
                <span className={styles["feedback-button-text"]}>feedback</span>
            </div>
            {isActiveFeedback &&
            <form className={styles["feedback-form-container"]}>
                <input 
                    placeholder="yourmailname@gmail.com" 
                    className={`${styles["feedback-email-input"]} ${styles["feedback-input"]}`} 
                    required 
                    type="email"
                    value={inputData.email}
                    onChange={emailChangeHandle}/>
                <textarea 
                    placeholder="write your opinion about the site" 
                    className={`${styles["feedback-description-input"]} ${styles["feedback-input"]}`} 
                    required
                    value={inputData.description}
                    onChange={descriptionChangeHandle}/>
                <button className={styles["feedback-submit-button"]}>send</button>
            </form>}
        </div>
    )
}

export default Feedback