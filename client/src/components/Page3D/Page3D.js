import { Canvas } from '@react-three/fiber';
import styles from './Page3D.module.css';
import ArrowFont from './components/ArrowFont';
import Description from './components/Description';
import CarColor from './components/CarColor';

function Page3D() {
    return (
        <div className={styles['page3D-container']}>
            <ArrowFont/>
            <Description />
            
                <Canvas>
                </Canvas>
       

            <CarColor/>
        </div>
    )
}

export default Page3D