import { Link } from 'react-router-dom'
export const ItemCard = ({ item }) => {
  return (
    <Link state={item} to='/single-item' className='products-item'>
       <h2>{item.title}</h2>
       <img src={item.image} alt='' />
     
      <p>
        <b>Category:</b>
        {item.category}
      </p>
      <p>
        <b>Description:</b>
        {item.description}
      </p>
      <p>
        <b>Condition:</b>
        {item.condition}
      </p>
      <p>
        <b>Zip Code:</b>
        {item.zip}
      </p>
      <p>
        <b>Phone:</b>
        {item.phone}
      </p>
      <p>
        <b>Availability:</b>
        {item.availability}
      </p>
    </Link>
  )
}
