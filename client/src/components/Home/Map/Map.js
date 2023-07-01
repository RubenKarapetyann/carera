import styles from './Map.module.css';
import Text from '../../Global/Text';
import MapImage from './components/MapImage';

function Map() {
    return (
        <div className={styles["map-container"]}>
            <MapImage/>
            <Text textClassName={styles["map-text"]}>
                our cars in international markets, you can see<br/>
                <span className={styles["map-text-span1"]}>the current map of the countries in<br/></span>
                <span className={styles["map-text-span2"]}>which our cars are sold</span>
            </Text>
        </div>
    )
}

export default Map;