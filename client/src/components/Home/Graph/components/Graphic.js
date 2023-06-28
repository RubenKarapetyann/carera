import styles from "../Graph.module.css"
import countLine from "../../../../images/countLine.svg"
import buyersLine from "../../../../images/buyersLine.svg"
import timeLine from "../../../../images/timeline.svg"
import GraphicVector from "./GraphicVector"

import { useState } from "react"

const Graphic = ()=>{
    const [priceIndex,setPriceIndex] = useState(true)
    return(
        <div className={styles["graphic"]}>
            <div style={{
                display : "flex"
            }}>
                <img
                    src={priceIndex ? buyersLine : countLine}
                    alt="countLine" 
                    className={styles["count-line"]}
                />

                <GraphicVector priceIndex={priceIndex} setPriceIndex={setPriceIndex}/>
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