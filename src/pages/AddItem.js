import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
  const [form, setForm] = useState({})
  let navigate = useNavigate()

  console.log(navigate)
  const sendItem = (event) => {
    event.preventDefault()
    fetch('http://localhost:4040', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(() => navigate('/all'))
      .catch((err) => console.error(err))
      navigate('/all')
  }
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <div className='adding'>
      <div className='add-item'>
      <h1>Add Item</h1>
      <form className='add-form' action=''>
        
        <label htmlFor=''>Item title</label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder='Clothes for girl'
          name='title'
          id='title'
          defaultValue='title'
        />

        <label htmlFor=''>Image:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder='http://image.com'
          name='image'
          id='image'
          defaultValue='image'
        />

        <label htmlFor=''>Category:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          list='categories'
          placeholder='ex.kids'
          name='category'
          id='category'
          defaultValue='kids'
        />
        <datalist id='categories'>
          <option value='kids' />
          <option value='women' />
          <option value='men' />
          <option value='furniture' />
          <option value='electronics' />
          <option value='pets' />
        </datalist>

        <label htmlFor=''>Description:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          placeholder='clothes for boys size 2T'
          name='description'
          id='description'
          defaultValue='clothes for boys'
        />

        <label htmlFor=''>Condition:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          list='conditions'
          placeholder='brand new/used'
          name='condition'
          id='condition'
        />
        <datalist id='conditions'>
          <option value='brand new' />
          <option value='used' />
        </datalist>

        <label htmlFor=''>Zip Code:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='number'
          min={0}
          placeholder='10203'
          name='zip'
          id='zip'
        />

        <label htmlFor=''>Phone:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='string'
          placeholder='444-555-6666'
          name='phone'
          id='phone'
        />
        <label htmlFor=''>Availability:</label>
            <input
              onChange={(e) => handleForm(e)}
              type='string' list='availability'
              placeholder='available/not available'
              name='availability'
              id='availab-ty'
            />
            <datalist id='availability'>
              <option value='available'/>
              <option value='not available'/>
            </datalist>
      </form>
      <button className="add-btn" onClick={event=>sendItem(event)}>Add Item</button>
    </div>
    </div>
  )
}
export default AddItem
