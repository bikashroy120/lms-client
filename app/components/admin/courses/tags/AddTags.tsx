import CustomInput from '@/app/utils/CustomInput'
import React from 'react'

type Props = {}

const AddTags = (props: Props) => {

    const handelOption = ()=>{

    }

  return (
    <div className=' w-full bg-white shadow-md p-5 rounded-md font-Poppins'>
        <h2 className='text-xl font-medium'> Add tags</h2>

        <div className=' mt-5 flex items-center gap-3'>
            <input type="text" className=" w-full py-3 px-3 border bg-transparent  rounded-lg border-gray-400 focus:outline-blue-500" />
            <button  className=" py-3 px-3 bg-green-500 rounded-md text-white font-semibold text-base">Add</button>
        </div>
    </div>
  )
}

export default AddTags