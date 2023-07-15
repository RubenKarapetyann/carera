import styles from '../Autoservice.module.css';

const GoogleMap = () => {
    return (
        <div className={styles['google-map']}>
            <iframe 
                className={styles['map']}
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2746925548326!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809876dbfc19%3A0xbab1c5c993805613!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1625922009295!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
        
    );
};

export default GoogleMap;