import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const ForMen = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:4040')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])

 const forMenFiltered =
    items.filter((item) => {
      if  (item.category==="men")
    return (item)}).map((item,key)=>{
        return( <ItemCard key={key} item={item}/>)})
        return(
            <div className="container">
            <h1>Home component</h1>
            <div className="products">{forMenFiltered}</div>
            </div>
       
    )
}

export default ForMen
