import { Canvas } from '@react-three/fiber';
import styles from './Page3D.module.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ArrowFont from './components/ArrowFont'
import Description from './components/Description'
import CarColor from './components/CarColor'

function Page3D() {
    const [data, setData] = useState({});
    const { id } = useParams()

    useEffect(() => {
        fetchData();
    }, []);
    

    const fetchData = async () => {
        try {
            const response = await fetch("/car/"+id);
            const jsonData = await response.json();
            setData(jsonData.car);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className={styles['page3D-container']}>
        <ArrowFont/>
        <Description car={data}/>
            <Canvas>
            </Canvas>
        <CarColor/>
    </div>
    )
}

export default Page3D