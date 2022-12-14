import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const ForWomen = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const userToken= localStorage.getItem('userToken')
    fetch(process.env.REACT_APP_API_ENDPOINT, {
      headers:{Authentication:userToken 
      }}
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])

  const forWomenFiltered = items.filter((item) => {
      if (item.category === 'women') return item
    }).map((item, key) => {
      return <ItemCard key={key} item={item} />
    })
  return (
    <div className='container-all'>
      <hr/>
      <h1>ALL FOR WOMAN</h1>
      <hr/>
      <div className='products'>{forWomenFiltered}</div>
    </div>
  )
}

export default ForWomen
