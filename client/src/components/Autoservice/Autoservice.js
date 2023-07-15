import styles from './Autoservice.module.css';
import AutoserviceList from './components/AutoserviceList';
import Logo from './components/Logo';

function Autoservice () {
    return (
        <div className={styles['autoservice']}>
            <div className={styles['autoservice-menu']}>
                <AutoserviceList/>
                <Logo/>
            </div>
        </div>
    )
}

export default Autoservice;