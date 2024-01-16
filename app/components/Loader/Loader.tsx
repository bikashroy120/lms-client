import React from 'react'
import "./loader.css"
type Props = {}

const Loader = (props: Props) => {
  return (
    <div className=' flex items-center fixed top-0 left-0 w-full h-full justify-center bg-white '>
        <div className='loader'></div>
    </div>
  )
}

export default Loader