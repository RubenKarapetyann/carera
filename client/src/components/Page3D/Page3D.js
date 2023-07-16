import { Canvas } from '@react-three/fiber';
import styles from './Page3D.module.css';
import ArrowFont from './components/ArrowFont'
import Description from './components/Description'
import CarColor from './components/CarColor'
import { Suspense } from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { CARS_MODELS } from '../../constants/constants';
import Loading from '../Global/loading/Loading';

function Page3D() {
    const [data, setData] = useState({});
    const [activeColor, setActiveColor] = useState(null)
    const { id } = useParams()
    const [loading,setLoading] = useState(false)
    

    useEffect(() => {
        fetchData();
    }, [id]);
    

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch("/car/"+id);
            const jsonData = await response.json();
            setData(jsonData.car);
            setActiveColor(jsonData.car.colors[0])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error fetching data:', error);
        }
    };


    const colorHandle = (color)=> setActiveColor(color)
    return (
        <div className={styles['page3D-container']}>
        {loading && <Loading/>}
        <ArrowFont/>
        <Description car={data}/>
        <Suspense>
            <Canvas camera={{
                fov : 90,
                position : [8,5,7]
            }}>
                {Object.keys(data).length && CARS_MODELS[data.model](activeColor)}
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