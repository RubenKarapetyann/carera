import styles from '../Autoservice.module.css';
import logo from '../../../images/logo.svg';

const Logo = () => {
    return (
        <div className={styles['autoservice-logo']}>
           <img src={logo} className={styles['logo']} alt="logo"/>
        </div>
    )
}

export default Logo;