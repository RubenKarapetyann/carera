import styles from "../Graph.module.css"
import countLine from "../../../../images/countLine.svg"
import timeLine from "../../../../images/timeline.svg"

const Graphic = ()=>{
    return(
        <div className={styles["graphic"]}>
            <img
                src={countLine}
                alt="countLine" 
                className={styles["count-line"]}
            />

            

            <img
                src={timeLine}
                alt="timeLine" 
                className={styles["time-line"]}
            />
        </div>
    )
}

export default Graphic