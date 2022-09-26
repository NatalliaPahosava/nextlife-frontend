import { Link } from "react-router-dom"
export const AdminCard=({item})=>{
    return(
        <Link state={item} to='/admin-single-item' className='products-item'>
        <img src={item.image} alt="" />
        <h3>{item.title}</h3>
        <p><b>Category:</b>{item.category}</p>
        <p><b>Description:</b>{item.description}</p>
        <p><b>Condition:</b>{item.condition}</p>
        <p><b>Zip Code:</b>{item.zip}</p>
        <p><b>Phone:</b>{item.phone}</p>
        <p><b>Availability:</b>{item.availability}</p>
        </Link>
)}