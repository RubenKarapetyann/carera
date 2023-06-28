import styles from "./Graph.module.css"
import Graphic from "./components/Graphic"



function Graph(){
    return(
        <div className={styles["graph-container"]}>
            <div className={styles["graph-inner-container"]}>
                <Graphic/>
            </div>
        </div>
    )
}

export default Graph