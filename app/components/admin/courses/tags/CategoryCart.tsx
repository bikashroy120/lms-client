import React from 'react'
import { MdDelete } from 'react-icons/md';

type Props = {
  item:any;
  refetch:any;
}

const CategoryCart = ({item,refetch}: Props) => {

  


  return (
    <div className=' flex items-center gap-2'>
        <h2>{item.title}</h2>
        <button><MdDelete/></button>
    </div>
  )
}

export default CategoryCart