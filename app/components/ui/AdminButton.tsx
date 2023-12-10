import React from 'react'

type Props = {
    title:string,
    handelClick?:any;
    variant?:string;
    className?:string;
}

const AdminButton = ({title,handelClick,variant,className}: Props) => {
  return (
    <button onClick={handelClick} className={`py-[11px] px-5 font-semibold flex items-center justify-center text-[16px] rounded-lg border-[2px] duration-300  border-green-600 ${variant==="fill" ? " bg-green-600 text-white hover:bg-green-700 hover:text-white " : " text-green-600 hover:text-white hover:bg-green-600"} ${className}`}>
        {title}
    </button>
  )
}

export default AdminButton