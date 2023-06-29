import DescriptionPalette from "./DescriptionPalette"
import styles from "../Graph.module.css"
import Text from '../../../Global/Text'

const GraphicDescription = ()=>{
    return(
        <div className={styles["graphic-decription-container"]}>
            <DescriptionPalette text={"price"} color={"#69B070"}/>
            <DescriptionPalette text={"number of buyers"} color={"#8BA2BD"}/>
            <Text textClassName={styles["graph-description-text"]}>
                if you look at a graph throughout our company's history, 
                you will see that we have always had an acceptability 
                value in terms of quality, we have always strived to 
                maintain this acceptability, both then and now, that's why
                our supercars were bought by so many people, 
                and that's why you also want to buy our products.
            </Text>
        </div>
    )
}
export default GraphicDescription