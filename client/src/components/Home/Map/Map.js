import styles from './Map.module.css';
import Text from '../../Global/Text';

function Map() {
    return (
        <div className={styles["map-container"]}>
            <Text textClassName={styles["map-text"]}>
                our cars in international markets, you can see<br/>
                <span className={styles["map-text-span1"]}>the current map of the countries in<br/></span>
                <span className={styles["map-text-span2"]}>which our cars are sold</span>
            </Text>
        </div>
    )
}

export default Map;