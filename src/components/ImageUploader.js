import { useState } from 'react'
import AWS from 'aws-sdk'

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

function ImageUploader() {
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)
  const [imageName, setImageName] = useState('')
  const [form, setForm] = useState({})

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0])
    setImageName(e.target.files[0].name)
  }

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      ContentType: file.type,
      Key: file.name,
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send((err) => {
        if (err) console.error(err)
      })
  }

  const handleform = (e) => {
    const url = `https://nextlife-image.s3.amazonaws.com/${imageName}`
    setForm({ ...form, imageurl: url, [e.target.name]: e.target.value })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Image uploader</h1>
        <input type='text' name='email' onChange={handleform} />
        <input type='file' onChange={handleFileInput} />
        <button onClick={() => uploadFile(selectedFile)}>
          Upload {progress > 0 && 'loading'} {progress}
        </button>
      </header>
    </div>
  )
}

export default ImageUploader
