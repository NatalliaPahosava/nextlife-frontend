import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const Pets = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    // fetch(process.env.REACT_APP_API_ENDPOINT)
    fetch('http://54.89.144.95:4040')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])

 const PetsFiltered =
    items.filter((item) => {
      if  (item.category==="pets")
    return (item)}).map((item,key)=>{
        return( <ItemCard key={key} item={item}/>)})
        return(
            <div className="container-all">
            <hr/>
            <h1>ALL FOR PETS</h1>
            <hr/>
            <div className="products">{PetsFiltered}</div>
            </div>
       
    )
}

export default Pets
