import styles from './Home.module.css'
import Graph from './Graph/Graph'

function Home (){
    return (
        <div className={styles["home-container"]}>
            <Graph/>
        </div>
    )
}

export default Home