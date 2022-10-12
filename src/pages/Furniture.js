import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const Furniture = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://54.89.144.95:4040')
    // fetch('http://localhost:4040')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])

  const furnitureFiltered = items
    .filter((item) => {
      if (item.category === 'furniture') return item
    })
    .map((item, key) => {
      return <ItemCard key={key} item={item} />
    })
  return (
    <div className='container-all'>
      <hr/>
      <h1>FURNITURE</h1>
      <hr/>
      <div className='products'>{furnitureFiltered}</div>
    </div>
  )
}

export default Furniture
