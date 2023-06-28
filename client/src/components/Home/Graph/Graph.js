import styles from "./Graph.module.css"
import Graphic from "./components/Graphic"
import GraphicDescription from "./components/GraphicDescription"



function Graph(){
    return(
        <div className={styles["graph-container"]}>
            <div className={styles["graph-inner-container"]}>
                <Graphic/>
                <GraphicDescription/>
            </div>
        </div>
    )
}

export default Graph