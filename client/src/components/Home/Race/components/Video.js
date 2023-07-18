import styles from '../Race.module.css';
import { useRef } from 'react';
import myVideo from '../../../../videos/carEra.mp4';


const Video = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div className={styles["race-video"]}>
      <video
        ref={videoRef}
        autoPlay
        muted
        className={styles["video"]}
        onEnded={handleVideoEnd}
        width="320" 
        height="240"
      >
      <source src={myVideo} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Video;