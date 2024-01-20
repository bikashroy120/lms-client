import React from 'react'

type Props = {
  data:any
}

const AdminCard = ({data}: Props) => {
  return (
    <div className={`py-5 px-5 flex bg-white items-center justify-between shadow-md rounded-xl border ${data?.className}`}>
        <div>
          <h2 className=' text-text text-[20px] font-semibold'>{data?.title}</h2>
          <h2 className='text-text text-[30px] font-bold'>{data?.value}</h2>
        </div>
        <div className={`text-[35px] flex items-center justify-center shadow-md w-[60px] h-[60px] rounded-md text-white ${data?.bg}`}>
            {data?.icon}
        </div>
    </div>
  )
}

export default AdminCard