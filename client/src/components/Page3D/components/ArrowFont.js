import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../Page3D.module.css';
import { useNavigate } from "react-router"

const ArrowFont = () => {
    const navigate = useNavigate()
    const backHandle = ()=>navigate(-1)
    
    return (
        <button className={styles['page3D-button']} onClick={backHandle}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles['page3D-font-icon']}/>
        </button>
    )
}

export default ArrowFont;   