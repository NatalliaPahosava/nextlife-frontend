import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SingleItem = () => {
  const [form, setForm] = useState({})
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { title, description, phone, zip, image, category, condition, availability } =
    location.state
    
  const handleUpdate = (event) => {
    event.preventDefault()

    fetch(`http://localhost:4040?title=${title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(() => navigate('/all'))
      .catch((err) => console.error(err))
  }
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <div className='single-product'>
        <h1>{title}</h1>
        <img src={image} alt='' />
        <h3>Description:{description}</h3>
        <h4>Phone:{phone}</h4>
        <p>Condition:{condition}</p>
        <p>Zip Code:{zip}</p>
        <p>Availability:{availability}</p>
        
        <div className='update-form'>
        {showForm && (
          <form className='add-form' action=''>
            <label htmlFor=''>Item title</label>
            <input
              onChange={(e) => handleForm(e)}
              type='text'
              placeholder='ex.Clothes for boys'
              name='title'
              id='title'
              defaultValue={title}
            />
            <label htmlFor=''>Image</label>
            <input
              onChange={(e) => handleForm(e)}
              type='text'
              placeholder='ex.http://image.com'
              name='image'
              id='image'
              defaultValue={image}
            />

            <label htmlFor=''>Category:</label>
            <input
              onChange={(e) => handleForm(e)}
              type='text' list='categories'
              placeholder='ex.kids'
              name='category'
              id='category'
              defaultValue={category}
            />
             <datalist id='categories'>
              <option value="kids"/>
              <option value="women"/>
              <option value="men"/>
              <option value="furniture"/>
              <option value="electronics"/>
            </datalist>
            <label htmlFor=''>Description</label>
            <input
              onChange={(e) => handleForm(e)}
              type='text'
              placeholder='ex. T-shirts for 2T size'
              name='description'
              id='description'
              defaultValue={description}
            />

            <label htmlFor=''>Condition:</label>
            <input
              onChange={(e) => handleForm(e)}
              type='text' list='conditions'
              placeholder='brand new/used'
              name='condition'
              id='condition'

              defaultValue={condition}
            />
            <datalist id='conditions'>
              <option value="brand new"/>
              <option value="used"/>
            </datalist>

            <label htmlFor=''>Zip Code:</label>
            <input
              onChange={(e) => handleForm(e)}
              type='number'
              placeholder='ex. 10306'
              name='zip'
              id='zip'
              min={0}
              defaultValue={zip}
            />
            <label htmlFor=''>Phone:</label>
            <input
              onChange={(e) => handleForm(e)}
              type='string'
              min={0}
              placeholder='444-555-6677'
              name='phone'
              id='phone'
              defaultValue={phone}
            />
            <label htmlFor=''>Availability:</label>
            <input
              onChange={(e) => handleForm(e)}
              type='string' list='availability'
              placeholder='available/not available'
              name='availability'
              id='availab-ty'
              defaultValue={availability}
            />
            <datalist id='availability'>
              <option value="available"/>
              <option value="not available"/>
            </datalist>
            <button onClick={handleUpdate}>Update Item</button>
          </form>
        )}
        <button onClick={() => setShowForm(!showForm)}>showForm</button>
      </div>
    </div>
    </div>
  )
}
export default SingleItem
