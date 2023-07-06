import styles from './Categories.module.css'
import Button from '../../Global/Button';

function Categories({state, statefunc, categories}) {
    const handleActive = (activeName) => {
      statefunc(activeName)
    }
    return (
      <div className={styles['categories-container']}>
        {categories.map(category => {
          return <Button 
          buttonName={category.name}
          buttonClassName={styles['categories-button']} 
          key = {category.id}
          styles = {{fontFamily: category.activeName === state ? "Righteous" : ""}}
          handle={() => handleActive(category.activeName)}/>
        })}
      </div>
    );
  }
  
  export default Categories;