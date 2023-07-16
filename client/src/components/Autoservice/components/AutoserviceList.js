import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Autoservice.module.css';

const AutoserviceList = ({autoservices}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);  
    };

    return (
        <div className={styles['autoservice-container']}>
            <div className={styles['menu-container']}>
                <h1 className={styles['autoservice-text']}>Autoservice-name</h1>
                <div onClick={toggleMenu}><FontAwesomeIcon className={styles['arrow-icon']} icon={faChevronDown}/></div>
            </div>
            {isOpen && 
                <div>
                    <ul className={styles['menu-list']}>
                        {autoservices && autoservices.map(autoservice => <li><p>{autoservice["name"]}</p></li>)}
                    </ul>
                </div>
            }
        </div>
    );
};

export default AutoserviceList;

