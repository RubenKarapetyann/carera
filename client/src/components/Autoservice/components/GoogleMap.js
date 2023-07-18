import styles from '../Autoservice.module.css';

const GoogleMap = ({autoservices, selectedItem}) => {
    const findRightCoords = () => {
        if(selectedItem){
            for(const i in autoservices){
                if(autoservices[i]["id"] === selectedItem ) return autoservices[i]["coordinates"]
            }
        }
        return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61558831.31542068!2d16.24142744677578!3d19.65921356758557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1689673739326!5m2!1sru!2sam"
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