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
import Loading from '../Global/loading/Loading'

function View() {
  const [cardData, setCardData] = useState([])
  const [filteredCardData, setFilteredCardData] = useState([])
  const [active, setActive] = useState(CATEGORIES[0].activeName)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    try {
      setLoading(true)
      fetch("/cars")
      .then(response=>response.json())
      .then(res=>{
        setCardData(res.cars)
        setFilteredCardData(res.cars)
        setLoading(false)
      })
    }catch(err){
      setLoading(false)
    }

  },[])

  const filterByCategorie = (activname, arrdata) => {
    const data = arrdata ? arrdata : cardData
    const filteredCardsByCategories = data.filter((card) => {
      if(activname === "ALL CARS") return card
      const thisyear = String(new Date().getFullYear())
      if(activname === "CURRENT YEAR" && card.year === thisyear) return card
      if(activname === "PREVIOUS YEARS" && card.year < thisyear) return card
    })
    setFilteredCardData(filteredCardsByCategories)
  }

  const handleSearch = (query) => {
    const filteredCards = cardData.filter((card) =>
      card.alt.toLowerCase().includes(query.toLowerCase().split(" ").join(""))
    );
    setFilteredCardData(filteredCards)
    filterByCategorie(active, filteredCards)
  }

  const renderCards = () => {
    return filteredCardData.map((card) => (
      <div className={styles['card-container']} key={card.id}>
        <Card id={card.id}>
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
      {loading && <Loading/>}
      <div className={styles['search']}>
        <Search onSearch={handleSearch} />
      </div>
      <div className={styles['card']}>
        <Categories state={active} statefunc={setActive} categories={CATEGORIES} filterByCategorie={filterByCategorie}/>
        <div className={styles['cards-container']}>
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default View;
