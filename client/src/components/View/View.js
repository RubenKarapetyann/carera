import styles from './View.module.css'
import Card from './Card/Card'
import Search from './Search/Search'
import CardImage from './Card/components/CardImage'
import CardTitle from './Card/components/CradTitle'
import CardPrice from './Card/components/CardPrice'
import Text from '../Global/Text'
import Categories from './Categories/Categories'
import { useEffect, useState } from 'react'
import { CATEGORIES } from '../../constants/constants'

function View() {
  const [cardData, setCardData] = useState([])
  const [filteredCardData, setFilteredCardData] = useState([])
  const [active, setActive] = useState(CATEGORIES[0].activeName)

  useEffect(()=>{
    fetch("/cars")
      .then(response=>response.json())
      .then(res=>{
        setCardData(res.cars)
        setFilteredCardData(res.cars)
      })
  },[])


  const handleSearch = (query) => {
    const filteredCards = cardData.filter((card) =>
      card.alt.toLowerCase().includes(query.toLowerCase().split(" ").join(""))
    );
    setFilteredCardData(filteredCards)
  }

  const renderCards = () => {
    return filteredCardData.map((card) => (
      <div className={styles['card-container']} key={card.id}>
        <Card>
          <CardImage
            src={card.image}
            imageClassName={styles['carera-image']}
            alt={card.alt}
          />
          <div className={styles['text-container']}>
            <CardTitle title={card.title} model={card.model} />
            <Text textClassName={styles['card-text']}>{card.description}</Text>
            <CardPrice price={card.price} />
          </div>
        </Card>
      </div>
    ));
  };

  return (
    <div className={styles['view-container']}>
      <div className={styles['search']}>
        <Search onSearch={handleSearch} />
      </div>
      <div className={styles['card']}>
        <Categories/>
        {renderCards()}
      </div>
    </div>
  );
}

export default View;
