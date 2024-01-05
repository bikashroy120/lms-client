import Image from 'next/image'
import React from 'react'

type Props = {
    data:any
}

const Review = ({data}: Props) => {
  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
        <h2 className=' text-text text-[23px] font-semibold'>Course Overview</h2>
        <div className=' mt-3 flex flex-col items-start gap-3'>
            {
                data?.map((video:any,index:number)=>(
                    <div key={index} className=' flex items-center gap-2'>
                        <Image src={"/image/play.svg"} width={50} height={50} alt='logo' className='mt-1 w-[30px] h-[30px]'/>
                        <h2 className=' text-[18px] font-semibold text-text'>{video?.title}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Review