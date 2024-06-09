import Image from 'next/image';
import React from 'react'

type Props = {
    active: number;
    setActive: (active: number) => void;
    handleAddCourse:any;
    courseData:any;
    edit?:boolean
}

const PreviewCourse = ({active,setActive,handleAddCourse,courseData,edit}: Props) => {

    const handelOption = ()=>{
        console.log(courseData)
        handleAddCourse()
      }
    
      const preButton = ()=>{
        setActive(active-1)
      }
    

  return (
    <div className="p-8">
        <div className='w-full h-[400px] bg-black rounded-lg'>
            <Image 
              src={courseData?.thumbnail}
              width={1200}
              height={1200}
              alt='banner'
              className='w-full h-full object-fill'
            />
        </div>

        <div className=' py-3'>
            <h2 className=' text-black font-medium text-xl'>{courseData.name}</h2>
            <div className=' flex items-center gap-3'>
              <h3 className=' text-red-500 font-medium line-through text-2xl'>${courseData.estimatedPrice}</h3>
              <h3 className=' font-medium text-2xl'>${courseData.price}</h3>
            </div>
        </div>

        <div className=' mb-5'>
          <p>{courseData?.description}</p>
        </div>

        <div className=" flex items-center justify-between">
            <button type="button" onClick={()=>preButton()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Prev</button>
            <button type="submit" onClick={()=>handelOption()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">{edit ? "Update" : "Create"}</button>
        </div>
    </div>
  )
}

export default PreviewCourse