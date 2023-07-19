import styles from './Partners.module.css';
import PartnersImage from './components/PartnersImage';
import logo1 from '../../../images/group.svg';
import logo2 from '../../../images/image.png';
import logo3 from '../../../images/ferrari.svg';

function Partners () {
    return (
        <div className={styles["partners-container"]}>
            <PartnersImage src={logo1} imageClassName={styles['partners-image1']} alt="logo1"/>
            <PartnersImage src={logo2} imageClassName={styles['partners-image2']} alt="logo2"/>
            <PartnersImage src={logo3} imageClassName={styles['partners-image3']} alt="logo3"/>
        </div>
    )
}

export default Partners