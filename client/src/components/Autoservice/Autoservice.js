import styles from './Autoservice.module.css';
import AutoserviceList from './components/AutoserviceList';
import Logo from './components/Logo';
import GoogleMap from './components/GoogleMap';

function Autoservice () {
    return (
        <div className={styles['autoservice']}>
            <div className={styles['autoservice-menu']}>
                <AutoserviceList/>
                <Logo/>
            </div>
            <GoogleMap/>
        </div>
    )
}

export default Autoservice;