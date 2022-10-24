import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AWS from 'aws-sdk'
import { useEffect } from 'react'

// const S3_BUCKET = 'nextlife-image'
// const REGION = 'us-east-1'

const S3_BUCKET = 'nextlife-image'
const REGION = 'us-east-1'

AWS.config.update({
  accessKeyId: 'AKIASMNFYOZB77XLPT3W',
  secretAccessKey: '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',
})


const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
})

const AddItem = () => {
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)
  const [form, setForm] = useState({})
  let navigate = useNavigate()

  useEffect(() => {
    if (progress === 100) {
      sendForm()
      navigate('/all')
    }
  }, [progress, navigate])

  const sendForm = async () => {
    try {
      await fetch(process.env.REACT_APP_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      console.log('form sent to API')
    } catch (error) {
      console.error(error)
    }
  }

  const uploadFile = (event) => {
    event.preventDefault()

    const params = {
      ACL: 'public-read',
      Body: selectedFile,
      Bucket: S3_BUCKET,
      ContentType: selectedFile.type,
      Key: selectedFile.name,
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', async (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))

        if (progress === 100) sendForm()
      })
      .send((err) => {
        if (err) console.error(err)
      })
  }

  const handleform = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setSelectedFile(e.target.files[0])
    setForm({
      ...form,
      image: `https://nextlife-image.s3.amazonaws.com/${e.target.files[0].name}`,
    })
  }

  console.log(form)
  return (
    <div className='adding'>
      <h1>Add Item</h1>
      <div className='add-item'>
        <form className='add-form' action=''>
          <div className='add-f'>
            <label htmlFor=''>Item title</label>
            <input
              onChange={handleform}
              type='text'
              placeholder='Clothes for girl'
              name='title'
              id='title'
            />
          </div>
          <div className='add-f'>
            <label htmlFor=''>Category:</label>
            <input
              onChange={handleform}
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
          </div>
          <div className='add-f'>
            <label htmlFor=''>Description:</label>
            <input
              onChange={handleform}
              type='text'
              placeholder='clothes for boys size 2T'
              name='description'
              id='description'
            />
          </div>
          <div className='add-f'>
            <label htmlFor=''>Condition:</label>
            <input
              onChange={handleform}
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
          </div>
          <div className='add-f'>
            <label htmlFor=''>Zip Code:</label>
            <input
              onChange={handleform}
              type='number' min={0}
              placeholder='10203'
              name='zip'
              id='zip'
            />
          </div>
          <div className='add-f'>
            <label htmlFor=''>Phone:</label>
            <input
              onChange={handleform}
              type='number' min={0}
              placeholder='444-555-6666'
              name='phone'
              id='phone'
            />
          </div>
          <div className='add-f'>
            <label htmlFor=''>Availability:</label>
            <input
              onChange={handleform}
              type='text'
              list='availability'
              placeholder='available/not available'
              name='availability'
              id='availab-ty'
            />
            <datalist id='availability'>
              <option value='available' />
              <option value='not available' />
            </datalist>
          </div>
        </form>
        <label htmlFor=''>Image:</label>
        <input type='file' onChange={handleImage} />
        
      </div>
      <button className='add-btn' onClick={uploadFile}>
        Upload {progress > 0 && 'loading'} {progress}
        <span></span>
        <span></span>
        <br /> 
        Add Item
      </button>
    </div>
  )
}

export default AddItem
