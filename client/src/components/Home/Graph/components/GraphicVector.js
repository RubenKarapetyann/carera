import { useState } from "react"
import byedPeople from "../../../../images/byed_people.svg"
import price from "../../../../images/price.svg"
import styles from "../Graph.module.css"


const GraphicVector = ()=>{
    const [priceIndex,setPriceIndex] = useState(true)
    const priceHandle = ()=>setPriceIndex(price=>!price)
    return(
        <>
            <img
                src={byedPeople}
                style={{
                    zIndex : priceIndex && 1,
                    opacity : priceIndex && 0.8
                }}
                alt="price"
                className={styles["graphic-vector-item"]}
                onClick={priceHandle}
            />
            <img
                src={price}
                style={{
                    zIndex : !priceIndex && 1,
                    opacity : !priceIndex && 0.8
                }}
                alt="byed-people"
                className={styles["graphic-vector-item"]}
                onClick={priceHandle}
            />
        </>
    )
}

export default GraphicVector