import styles from './Home.module.css'
import Graph from './Graph/Graph'
import Welcome from './Welcome/Welcome'

function Home (){
    return (
        <div className={styles["home-container"]}>
            <Welcome/>
            <Graph/>
        </div>
    )
}

export default Home