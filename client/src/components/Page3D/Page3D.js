import { Canvas } from '@react-three/fiber';
import styles from './Page3D.module.css';
import ArrowFont from './components/ArrowFont'
import Description from './components/Description'
import CarColor from './components/CarColor'
import { Suspense } from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import Model1 from './components/models/Model1';
import { Model2 } from './components/models/Model2';
import { Model3 } from './components/models/Model3';

function Page3D() {
    const [data, setData] = useState({});
    const [activeColor, setActiveColor] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchData();
    }, []);
    

    const fetchData = async () => {
        try {
            const response = await fetch("/car/"+id);
            const jsonData = await response.json();
            setData(jsonData.car);
            setActiveColor(jsonData.car.colors[0])
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const colorHandle = (color)=> setActiveColor(color)
    return (
        <div className={styles['page3D-container']}>
        <ArrowFont/>
        <Description car={data}/>
        <Suspense>
            <Canvas camera={{
                fov : 90,
                position : [8,5,7]
            }}>

                {/* <Model1 color={activeColor}/> */}
                {/* <Model2 color={activeColor}/> */}
                <Model3 color={activeColor}/>
                <directionalLight intensity={0.5} position={[8,5,7]}/>
                <directionalLight intensity={1} position={[5,8,5]}/>
                <ambientLight intensity={1}/>
                <OrbitControls enableZoom={false}/>
            </Canvas>
        </Suspense>
        <CarColor colorHandle={colorHandle} colors={data.colors} />
    </div>
    )
}

export default Page3D