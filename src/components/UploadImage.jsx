import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { CiCamera } from 'react-icons/ci'

const UploadImage = () => {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    function handleFileChange (e) {
        console.log("event =>", e);
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    function handleRemoveFile () {
        setFile(null);
        setPreview(null);
    }

    useEffect(() => {
        if(file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }, [file])

  return (
    <>
        {!preview && (
            <div>
                <label for="upload">
                    <div className='cursor-pointer w-[150px] h-[150px] bg-gray-200 rounded-md flex justify-center items-center'>
                        <div className='w-[100px] h-[100px] border-gray-300 rounded-sm border-dashed border-[3px] flex justify-center items-center'>
                            <CiCamera className='text-[48px] text-gray-300' />
                        </div>
                    </div>
                </label>
                <input className='hidden' onChange={(e) => handleFileChange(e)} id="upload" type='file' />
            </div>
        )}
        {preview && (
            <div className='w-[150px] h-[150px] bg-gray-200 rounded-md relative'>
                <img src={preview} alt="preview" className='w-full h-full object-cover' />
                <div onClick={() => {handleRemoveFile()}} className='cursor-pointer w-[24px] h-[24px] bg-gray-400 absolute top-[8px] right-[8px] flex justify-center items-center'>
                    <FaTimes />
                </div>
            </div>
        )}
    </>
  )
}

export default UploadImage