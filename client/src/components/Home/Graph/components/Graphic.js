import styles from "../Graph.module.css"
import countLine from "../../../../images/countLine.svg"
import timeLine from "../../../../images/timeline.svg"
import GraphicVector from "./GraphicVector"

const Graphic = ()=>{
    return(
        <div className={styles["graphic"]}>
            <div style={{
                display : "flex"
            }}>
                <img
                    src={countLine}
                    alt="countLine" 
                    className={styles["count-line"]}
                />

                <GraphicVector/>
            </div>
            
            <img
                src={timeLine}
                alt="timeLine" 
                className={styles["time-line"]}
            />
        </div>
    )
}

export default Graphic