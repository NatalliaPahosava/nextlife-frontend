import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const AllItems = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const userToken= localStorage.getItem('userToken')
    fetch(process.env.REACT_APP_API_ENDPOINT,{
        headers:{Authentication:userToken }
       })
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])

  const filteredItems = items.filter((item) => {
    return item.zip.toString().includes(search)
  })

  console.log(filteredItems)
  const allItems = filteredItems.map((item) => {
    return <ItemCard key={item._id} item={item} />
  })

  return (
    <div className='container-all'>
      <hr />
      <h1>ALL CATEGORIES</h1>
      <hr />
      <input
        type='number'
        placeholder='...Search by zip'
        className='search'
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className='products'>{allItems}</div>
    </div>
  )
}
export default AllItems
