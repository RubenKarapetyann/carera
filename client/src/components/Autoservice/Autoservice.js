import styles from './Autoservice.module.css';
import AutoserviceList from './components/AutoserviceList';
import Logo from './components/Logo';
import GoogleMap from './components/GoogleMap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Autoservice () {
    const [datamap, setMap] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch("/map")
        .then(response => response.json())
        .then(res => { 
            setMap(res.mapdata)
        })
    }, [])
    return (
        <div className={styles['autoservice']}>
            <div className={styles['autoservice-menu']}>
                <AutoserviceList/>
                <Logo/>
            </div>
            <GoogleMap/>
        </div>
    )
}

export default Autoservice;