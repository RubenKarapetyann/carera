import styles from '../Page3D.module.css';

const Description = ({ car={} }) => {
    return (
        <div className={styles['description-container']}>
            <div className={styles['description-text']}>
                <p>{car.hp}</p>
                <p>{car.engineCapacity}</p>
                <p>{car.engine}</p>
                <p>{car.engineType}</p>
                <p>{car.transmission}</p>
            </div>
        </div>
    );
      } 

export default Description;