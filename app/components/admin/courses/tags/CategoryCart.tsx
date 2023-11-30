import { useDeleteCategoryMutation } from '@/redux/features/category/categoryApi';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

type Props = {
  item:any;
  refetch:any;
}

const CategoryCart = ({item,refetch}: Props) => {
  const [deleteCategory,{isLoading,error,isSuccess}]= useDeleteCategoryMutation()

  const handelDelete = async()=>{
    await deleteCategory(item._id)
  }

  useEffect(()=>{
    if(isSuccess){
      const message = "Category Delete Success"
      toast.success(message)
      refetch()
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message)
      }else{
        console.log(error)
      }
    }
  },[isSuccess,error])

  return (
    <div className=' flex items-center gap-2'>
        <h2>{item.title}</h2>
        <button onClick={()=>handelDelete()}><MdDelete/></button>
    </div>
  )
}

export default CategoryCart