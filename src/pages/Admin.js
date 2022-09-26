import { useState,useEffect } from "react"
import { AdminCard } from "../components/AdminCard"

const Admin=()=>{
    const [items,setItems]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4040/')
        .then(res=>res.json())
        .then(data=>setItems(data))
        .catch(err=>console.error(err))
    },[])
    const allItems=items.map(item => {
       return <AdminCard key={item._id} item={item}/>
    })
    return(
    <div className="container">
    <h1>Home component</h1>
    <div className="products">{allItems}</div>
    </div>
        
    )
}
export default Admin
