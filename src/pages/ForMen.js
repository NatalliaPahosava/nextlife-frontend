import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const ForMen = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://54.89.144.95:4040')
    // fetch('http://localhost:4040')
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
            <div className="container-all">
              <hr/>
            <h1>ALL FOR MEN</h1>
            <hr/>
            <div className="products">{forMenFiltered}</div>
            </div>
       
    )
}

export default ForMen
