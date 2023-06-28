import styles from "../Graph.module.css"


const DescriptionPalette = ({ color, text })=>{
    return(
        <div className={styles["graphic-description-palette-container"]}>
            <div className={styles["graphic-description-rectangle"]} style={{
                backgroundColor : color
            }}>

            </div>
            <span className={styles["graphic-description-palette-text"]}>
                {text}
            </span>
        </div>
    )
}



export default DescriptionPalette