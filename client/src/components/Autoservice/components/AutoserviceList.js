import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Autoservice.module.css';

const AutoserviceList = ({autoservices, selectedItem, setSelectedItem}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);  
    };

    const handleSelectItem = (name) => {
        setSelectedItem(name)
    }

    const styleChange = (name) => {
        return selectedItem === name ? "var(--rust)" : false 
    }

    return (
        <div className={styles['autoservice-container']}>
            <div className={styles['menu-container']}>
                <h1 className={styles['autoservice-text']}>Autoservice-name</h1>
                <div onClick={toggleMenu}><FontAwesomeIcon className={styles['arrow-icon']} icon={faChevronDown}/></div>
            </div>
            {isOpen && 
                <div>
                    <ul className={styles['menu-list']}>
                        {autoservices && autoservices.map(autoservice => <li key={autoservice["id"]} onClick={() => handleSelectItem(autoservice["name"])} style={{backgroundColor: styleChange(autoservice["name"])}}><p>{autoservice["name"]}</p></li>)}
                    </ul>
                </div>
            }
        </div>
    );
};

export default AutoserviceList;

