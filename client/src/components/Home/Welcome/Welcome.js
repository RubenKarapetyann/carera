import styles from './Welcome.module.css';
import PageLogo from './components/PageLogo';
import Text from '../../Global/Text';
import Button from '../../Global/Button';
import WelcomeImage from './components/WelcomeImage';
import carImage from '../../../images/main_page_car.png';
import logo1 from '../../../images/top_gear.png';
import logo2 from '../../../images/nurburgring.png';
import logo3 from '../../../images/Decorator.svg';


function Welcome () {
    return (
        <div className={styles["container"]}>
        <WelcomeImage src={logo3} imageClassName={styles['decorator']} alt="logo"/>
        <div className={styles["welcome-container"]}>
          <PageLogo />
          <div className={styles["text-container"]} >
            <Text textClassName={styles["text"]}>
              a series of supercars that has gained international recognition 
              and won the hearts of many car enthusiasts, a young<br/> 
              but fast growing company that provides fast,<br/> 
              technological and unique cars
            </Text>
            <Button buttonName="read more" buttonClassName={styles['welcome-button']}/>
          </div>
          <WelcomeImage src={carImage} imageClassName={styles['welcome-img']} alt="Car"/>
          <div className={styles["welcome-logos"]}>
          <WelcomeImage src={logo1} imageClassName={styles['welcome-logo']} alt="logo"/>
          <WelcomeImage src={logo2} imageClassName={styles['welcome-logo']} alt="logo"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Welcome;