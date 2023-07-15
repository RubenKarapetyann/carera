import styles from './BottomPart.module.css';
import icon1 from '../../../images/youtube.png';
import icon2 from '../../../images/twitter.png';
import icon3 from '../../../images/linkedin.png';
import Text from '../../Global/Text';
import Icons from '../BottomPart/components/Icons';

function BottomPart() {
    return (
        <div className={styles["bottom"]} >
            <Text id="bottomText" textClassName={styles["bottom-text"]}>
                Introducing CarEra, where innovation meets speed and luxury! We area young, fast-growing company<br/>
                that specializes in crafting high-end, supercars that redefine the boundaries of automotive excellence.<br/>
                Our exceptional lineup features a series of supercars that have not only gained international<br/> 
                recognition but have also won the hearts of countless car enthusiasts worldwide.At CarEra, we pride<br/> 
                ourselves on our unwavering commitment to delivering fast, technological, and truly unique vehicles.<br/> 
                Each car we create embodies the perfect blend of cutting-edge technology, exquisite craftsmanship,<br/> 
                and unparalleled performance. From the sleek curves to the roaring engines, every aspect of our<br/> 
                supercars is meticulously designed to captivate both the eye and the soul.Driven by our passion for<br/> 
                pushing boundaries, we continuously strive to set new standards in the automotive industry. Our team<br/> 
                of skilled engineers and designers work tirelessly to ensure that each car bearing the CarEra emblem<br/> 
                represents the pinnacle of automotive engineering and design.
            </Text>
            <div className={styles["icons"]}>
                <Icons path="https://www.youtube.com/" src={icon1} imageClassName={styles['icon1']} alt="icon"/>
                <Icons path="https://web.telegram.org/k/" src={icon2} imageClassName={styles['icon2']} alt="icon"/>
                <Icons path="https://www.linkedin.com/?original_referer=https%3A%2F%2Fyandex.ru%2F" src={icon3} imageClassName={styles['icon3']} alt="icon"/>
            </div>
        </div>
       
    )
}

export default BottomPart;