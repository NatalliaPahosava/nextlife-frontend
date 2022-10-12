import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const Kids = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://54.89.144.95:4040')
    // fetch('http://localhost:4040')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])


  
 const kidsFiltered =
    items.filter((item) => {
      if  (item.category==="kids")
    return (item)}).map((item)=>{
        return( <ItemCard item={item}/>)})
        return(
            <div className="container-all">
              <hr/>
            <h1>ALL FOR KIDS</h1>
            <hr/>
            <div className="products">{kidsFiltered}</div>
            </div>
       
    )
}

export default Kids
