import styles from './Categories.module.css'
import Button from '../../Global/Button';

function Categories() {
    return (
      <div className={styles['categories-container']}>
        <Button buttonName="All Cars" buttonClassName={styles['categories-button']}/>
        <Button buttonName="Current Year" buttonClassName={styles['categories-button']}/>
        <Button buttonName="Previous Years" buttonClassName={styles['categories-button']}/>
      </div>
    );
  }
  
  export default Categories;