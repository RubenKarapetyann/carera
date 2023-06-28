import DescriptionPalette from "./DescriptionPalette"
import styles from "../Graph.module.css"


const GraphicDescription = ()=>{
    return(
        <div className={styles["graphic-decription-container"]}>
            <DescriptionPalette text={"price"} color={"#69B070"}/>
            <DescriptionPalette text={"number of buyers"} color={"#8BA2BD"}/>
        </div>
    )
}
export default GraphicDescription