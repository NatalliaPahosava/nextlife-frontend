import { useState,useEffect } from "react"
import { AdminCard } from "../components/AdminCard"

const Admin=()=>{
    const [items,setItems]=useState([])
    const [search,setSearch]=useState("")

    useEffect(()=>{
        const userToken= localStorage.getItem('userToken')
        fetch(process.env.REACT_APP_API_ENDPOINT,{
            headers:{Authentication:userToken }
           })
        .then(res=>res.json())
        .then(data=>setItems(data))
        .catch(err=>console.error(err))
    },[])
    const filteredItems=items.filter(item=>{
        return item.availability.includes(search)
    })
    const allItems=filteredItems.map(item => {
       return <AdminCard key={item._id} item={item}/>
    })
    return(
    <div className="container-all">
    <hr/>
    <h1>ADMIN PAGE</h1>
    <hr/>
    <input type="text" placeholder="...Search by availability" className="search" onChange={(event)=>setSearch(event.target.value)} />
    <div className="products">{allItems}</div>
    </div>
        
    )
}
export default Admin
