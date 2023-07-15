import styles from './Autoservice.module.css';
import AutoserviceList from './components/AutoserviceList';

function Autoservice () {
    return (
        <div className={styles['autoservice']}>
            <div className={styles['autoservice-menu']}>
                <AutoserviceList/>
            </div>
        </div>
    )
}

export default Autoservice;