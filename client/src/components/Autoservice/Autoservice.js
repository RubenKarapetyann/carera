import styles from './Autoservice.module.css';
import AutoserviceList from './components/AutoserviceList';
import Logo from './components/Logo';
import GoogleMap from './components/GoogleMap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Autoservice () {
    const [countryData, setMap] = useState(null)
    const [selectedItem, setSelectedItem] = useState("")
    const { id } = useParams()

    useEffect(() => {
        fetch("/map")
        .then(response => response.json())
        .then(res => { 
            res.mapdata.map(obj => obj["country-id"] === id ? setMap(obj) : null)
        })
    }, [])

    return (
        <div className={styles['autoservice']}>
            <div className={styles['autoservice-menu']}>
                <AutoserviceList 
                autoservices={countryData ? countryData["autoservices"] : null}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}/>
                <Logo/>
            </div>
            <GoogleMap 
            autoservices={countryData ? countryData["autoservices"] : null}
            selectedItem={selectedItem}/>
        </div>
    )
}

export default Autoservice;