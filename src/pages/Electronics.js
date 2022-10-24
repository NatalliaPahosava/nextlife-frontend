import { useState, useEffect } from 'react'
import { ItemCard } from '../components/ItemCard'

const Electronics = () => {
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

 const electronicsFiltered =
    items.filter((item) => {
      if  (item.category==="electronics")
    return (item)}).map((item,key)=>{
        return( <ItemCard key={key} item={item}/>)})
        return(
            <div className="container-all">
              <hr/>
            <h1>ELECTRONICS</h1>
            <hr/>
            <div className="products">{electronicsFiltered}</div>
            </div>
       
    )
}

export default Electronics
