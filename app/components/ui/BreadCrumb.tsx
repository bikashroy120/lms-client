import Link from 'next/link'
import React from 'react'

type Props = {
    title:string,
    subTitle:string,
}

const BreadCrumb = ({title,subTitle}: Props) => {
  return (
    <div id='topHeader_bg'>
        <div className=' py-10 w-full h-full bg-text/10 flex items-center justify-center flex-col'>
            <h2 className=' text-text font-semibold text-[45px]' >{title}</h2>
            <div className=' flex items-center justify-center gap-3'>
                <Link className=' text-text font-medium text-[16px]' href={"/"}>Home</Link>
                <div className='w-[12px] h-[4px] bg-primary rounded-full'></div>
                <p className=' text-base text-lightText'>{subTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb