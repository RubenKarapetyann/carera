import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../Page3D.module.css';


const ArrowFont = ({ backHandle }) => {

    return (
        <button className={styles['page3D-button']} onClick={backHandle}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles['page3D-font-icon']}/>
        </button>
    )
}

export default ArrowFont