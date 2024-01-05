import React from 'react'

type Props = {}

const Included = (props: Props) => {

    const data = [
        "Source code included","Full lifetime access"," Certificate of completion","Premium Support"
    ]

  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
        <div className='flex flex-col gap-3'>
            {data?.map((item:any,index:number)=>(
                <div key={index} className=' flex items-center gap-3'>
                    <div className='w-[8px] h-[8px] rounded-full bg-primary'></div>
                    <h3 className='text-base text-lightText font-normal'>{item}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Included