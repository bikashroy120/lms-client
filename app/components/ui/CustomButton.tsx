import React from 'react'

type Props = {
    title:string,
    handelClick?:any;
    variant?:string;
    className?:string;
}

const CustomButton = ({title,handelClick,variant,className}: Props) => {
  return (
    <button onClick={handelClick} className={`py-2 px-5 font-semibold flex items-center justify-center text-[16px] rounded-full border-[3px] duration-300  border-success ${variant==="fill" ? " bg-success text-white hover:bg-transparent hover:text-text " : " text-text hover:text-white hover:bg-success"} ${className}`}>
        {title}
    </button>
  )
}

export default CustomButton