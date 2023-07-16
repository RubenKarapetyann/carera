import styles from "./Loading.module.css"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = ()=>{
    return (
        <div className={styles["loading-container"]}>
            <span className={styles["loading-icon-container"]}><FontAwesomeIcon icon={faSpinner}/></span>
        </div>
    )
}

export default Loading