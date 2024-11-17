import React, { useState } from 'react'
import { CiCamera } from 'react-icons/ci'

const UploadImage = () => {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    function handleFileChange (e) {
        console.log("event =>", e);

    }

  return (
    <div>
        <label for="upload">
            <div className='w-[150px] h-[150px] bg-gray-200 rounded-md flex justify-center items-center'>
                <div className='w-[100px] h-[100px] border-gray-300 rounded-sm border-dashed border-[3px] flex justify-center items-center'>
                    <CiCamera className='text-[48px] text-gray-300' />
                </div>
            </div>
        </label>
        <input onChange={(e) => handleFileChange(e)} id="upload" type='file' />
    </div>
  )
}

export default UploadImage