import styles from './Home.module.css'
import Graph from './Graph/Graph'
import Welcome from './Welcome/Welcome'
import Map from './Map/Map'
import BottomPart from './BottomPart/BottomPart'

function Home (){
    return (
        <div className={styles["home-container"]}>
            <Welcome/>
            <Graph/>
            <Map/>
            <BottomPart/>
        </div>
    )
}

export default Home