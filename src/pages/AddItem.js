// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import AWS from 'aws-sdk'

// const AddItem = () => {
//   const [form, setForm] = useState({})
//   const [image, setImage] = useState({})
//   const [progress, setProgress] = useState('')
//   let navigate = useNavigate()

//   const sendItem = (event) => {
//     event.preventDefault()
//     fetch('http://54.89.144.95:4040/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     })
//       .then((res) => res.json())
//       .then(() => navigate('/all'))
//       .catch((err) => console.error(err))
//     navigate('/all')
//   }
//   const handleForm = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }
//   const sendImage = (e) => {
//     // PREVENT default
//     e.preventDefault()
//     // 1. need up upload file {} to S3 BUCKET

//     AWS.config.update({
//       accessKeyId: 'AKIASMNFYOZBXJW6A26Y',
//       secretAccessKey: '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',
//     })

//     const myBucket = new AWS.S3({
//       params: { Bucket: 'nextlife-image' },
//       region: 'us-east-1',
//     })

//     const handleFileInput=(e)=>{
//       setSelectedFile({ ...form, [e.target.name]:e.target.files[0]})
//     }

//    const uploadFile=(file)=>{
//     const params = {
//       ACL: 'public-read',
//       Body: file,
//       Bucket: 'nextlife-image',
//       Key: file.name
//     }

//     myBucket.putObject(params)
//       .on('httpUploadProgress', (event) => {
//         setProgress(Math.round((event.loaded / event.total) * 100))
//       })
//       .send((err) =>{if (err) console.error(err)})
    
//     // 2. Get Downloadurl from bucket item
//     // 3. add downloadurl to form body
//   }

//   return (
//     <div className='adding'>
//       <div className='add-item'>
//         <h2>{progress} here</h2>
//         <h1>Add Item</h1>
//         <form className='add-form' action=''>
//           <label htmlFor=''>Item title</label>
//           <input
//             onChange={handleForm}
//             type='text'
//             placeholder='Clothes for girl'
//             name='title'
//             id='title'
//           />
      
//            <label htmlFor=''>Image:</label>
//           <input
//             onChange={(e) => {handleFileInput}}
//             type='file'
//             name='image'
//             id='image'
//           />
//           <button onClick={uploadFile(selectedFile)}>Upload file</button> 
//           <button onClick={sendImage}></button>

//           <label htmlFor=''>Category:</label>
//           <input
//             onChange={(e) => handleForm(e)}
//             type='text'
//             list='categories'
//             placeholder='ex.kids'
//             name='category'
//             id='category'
//           />
//           <datalist id='categories'>
//             <option value='kids' />
//             <option value='women' />
//             <option value='men' />
//             <option value='furniture' />
//             <option value='electronics' />
//             <option value='pets' />
//           </datalist>

//           <label htmlFor=''>Description:</label>
//           <input
//             onChange={(e) => handleForm(e)}
//             type='text'
//             placeholder='clothes for boys size 2T'
//             name='description'
//             id='description'
//             defaultValue='clothes for boys'
//           />

//           <label htmlFor=''>Condition:</label>
//           <input
//             onChange={(e) => handleForm(e)}
//             type='text'
//             list='conditions'
//             placeholder='brand new/used'
//             name='condition'
//             id='condition'
//           />
//           <datalist id='conditions'>
//             <option value='brand new' />
//             <option value='used' />
//           </datalist>

//           <label htmlFor=''>Zip Code:</label>
//           <input
//             onChange={(e) => handleForm(e)}
//             type='number'
//             min={0}
//             placeholder='10203'
//             name='zip'
//             id='zip'
//           />

//           <label htmlFor=''>Phone:</label>
//           <input
//             onChange={(e) => handleForm(e)}
//             type='string'
//             placeholder='444-555-6666'
//             name='phone'
//             id='phone'
//           />
//           <label htmlFor=''>Availability:</label>
//           <input
//             onChange={(e) => handleForm(e)}
//             type='string'
//             list='availability'
//             placeholder='available/not available'
//             name='availability'
//             id='availab-ty'
//           />
//           <datalist id='availability'>
//             <option value='available' />
//             <option value='not available' />
//           </datalist>
//         </form>
//         <button className='add-btn' onClick={(event) => sendItem(event)}>
//           Add
//         </button>
//       </div>
//     </div>
//   )
// }
// export default AddItem

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
  const [form, setForm] = useState({})
  let navigate = useNavigate()

  console.log(navigate)
  const sendItem = (event) => {
    event.preventDefault()
    fetch(process.env.REACT_APP_API_ENDPOINT, {
      // fetch('http://54.89.144.95:4040/', {
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
        />

        <label htmlFor=''>Image:</label>
        <input
          onChange={e=> setForm({ ...form, [e.target.name]: e.target.value })}
          type='text'
          placeholder='http://image.com'
          name='image'
          id='image'
        />

        <label htmlFor=''>Category:</label>
        <input
          onChange={(e) => handleForm(e)}
          type='text'
          list='categories'
          placeholder='ex.kids'
          name='category'
          id='category'
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
      <button className="add-btn" onClick={event=>sendItem(event)}>Add</button>
    </div>
    </div>
  )
}
export default AddItem


// {
// 	"Version": "2012-10-17",
// 	"Id": "Policy1665246669536",
// 	"Statement": [
// 		{
// 			"Sid": "Stmt1665246667587",
// 			"Effect": "Allow",
// 			"Principal": "*",
// 			"Action": "s3:GetObject",
// 			"Resource": [
// 				"arn:aws:s3:::nextlife-image/*",
// 				"arn:aws:s3:::nextlife-image"
// 			]
// 		}
// 	]
// }