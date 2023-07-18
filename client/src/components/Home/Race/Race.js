import styles from './Race.module.css';
import Text from '../../Global/Text';
import Video from '../Race/components/Video';

function Race() {
    return (
        <div className={styles["race-container"]} id="racePart">
            <Video/>
            <div className={styles["gradient"]}></div>
            <Text textClassName={styles["race-text"]}>
                "Exciting news from the world of motorsports! We are thrilled to announce 
                that the legendary<br/>company "CarEra" is gearing up to make its mark on the 
                racing scene once again. With great<br/>pride, we hereby declare our participation 
                in one of the most prestigious automotive events<br/>of the year - the TopGear 
                race at the iconic Nürburgring circuit!Carera has become<br/>synonymous with 
                cutting-edge technology, unrivaled performance, and a relentless pursuit of<br/> 
                excellence. As we prepare to take on the thrilling challenges of the Nürburgring, 
                we are<br/>confident that our exceptional team and groundbreaking vehicles will leave 
                a lasting<br/>impression on fans and competitors alike."
            </Text>
        </div>
    )
}

export default Race;