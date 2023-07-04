import styles from '../Card.module.css'

const CardTitle = ({ title, model }) => {
    return (
      <>
        <h1 className={styles['card-title']}>{title}<span>{model}</span></h1>
      </>
      
    )
  }
  
export default CardTitle