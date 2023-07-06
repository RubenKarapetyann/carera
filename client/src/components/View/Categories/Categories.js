import styles from './Categories.module.css'
import Button from '../../Global/Button';

function Categories({state, statefunc, categories, filterByCategorie}) {
    const handleActive = (activeName) => {
      statefunc(activeName)
      filterByCategorie(activeName)
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