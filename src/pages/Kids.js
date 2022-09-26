import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const Kids = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:4040')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])


  
 const kidsFiltered =
    items.filter((item) => {
      if  (item.category==="kids")
    return (item)}).map((item,key)=>{
        return( <ItemCard key={key} item={item}/>)})
        return(
            <div className="container">
            <h1>All For Kids</h1>
            <div className="products">{kidsFiltered}</div>
            </div>
       
    )
}

export default Kids
