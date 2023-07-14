import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Autoservice.module.css';

const AutoserviceList = () => {
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
            {isOpen && (
                <div>
                    <ul className={styles['menu-list']}>
                        <li>Menu item 1</li>
                        <li>Menu item 2</li>
                        <li>Menu item 3</li>
                        <li>Menu item 4</li>
                        <li>Menu item 5</li>
                        <li>Menu item 6</li>
                        <li>Menu item 7</li>
                    </ul>
                </div>
                
            )}
        </div>
    );
};

export default AutoserviceList;

