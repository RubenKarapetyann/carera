import styles from './Categories.module.css'
import Button from '../../Global/Button';
import { CATEGORIES } from '../../../constants/constants'

function Categories() {
    return (
      <div className={styles['categories-container']}>
        {CATEGORIES.map(category => {
          return <Button 
          buttonName={category.name}
          buttonClassName={styles['categories-button']} 
          key = {category.id}/>
        })}
      </div>
    );
  }
  
  export default Categories;