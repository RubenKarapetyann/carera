import styles from '../Autoservice.module.css';

const GoogleMap = ({autoservices, selectedItem}) => {
    const findRightCoords = () => {
        if(selectedItem){
            for(const i in autoservices){
                if(autoservices[i]["name"] === selectedItem ) return autoservices[i]["coordinates"]
            }
        }
    }
    return (
        <div className={styles['google-map']}>
            <iframe 
                className={styles['map']}
                title="Google Map"
                src={findRightCoords()}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
        
    );
};

export default GoogleMap;