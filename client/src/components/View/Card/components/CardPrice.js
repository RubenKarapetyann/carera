import styles from '../Card.module.css'

const CardPrice = ({ price }) => {
    return (
      <p className={styles['card-price']}>{price}</p>
    )
  }
  
export default CardPrice