import styles from '../Page3D.module.css';
import Button from '../../Global/Button';

const CarColor = ({ colors }) => {
    return (
        <div className={styles['carColor-container']}>
            {colors && colors.map((color,i)=>{
                return <Button 
                    handle={colorHandleInner}
                    key={i} 
                    buttonClassName={${styles["carColor-button"]}} 
                    styles={{background : color}}
                />
            })}
        </div>
    )
}

export default CarColor;