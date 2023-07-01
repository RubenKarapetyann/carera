import styles from './Home.module.css'
import Graph from './Graph/Graph'
import Welcome from './Welcome/Welcome'
import Map from './Map/Map'

function Home (){
    return (
        <div className={styles["home-container"]}>
            <Welcome/>
            <Graph/>
            <Map/>
        </div>
    )
}

export default Home