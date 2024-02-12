import React, { useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new w-full flex ">
      <div className="newContainer flex-6">
        <div className="top shadow-md p-3 m-5 flex">
          <h1 className='color-lightgray text-2xl'>{title}</h1>
        </div>
        <div className="bottom shadow-md p-3 m-5 flex">
          <div className="left flex-1 text-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className='w-24 h-24 rounded-full object-cover'
            />
          </div>
          <div className="right flex-2">
            <form className="flex flex-wrap gap-8 justify-around">
              <div className="formInput w-[40%]">
                <label htmlFor="file " className='items-center gap-2'>
                  Image: <DriveFolderUploadIcon className="icon cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  className=''
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput w-[40%]" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button className='w-48 py-2 bg-teal-500 text-white font-bold cursor-pointer mt-6'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New