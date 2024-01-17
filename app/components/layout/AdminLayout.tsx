"use client"

import React from 'react'
import AdminSidber from './AdminSidber'
import AdminNav from './AdminNav'
import { useSelector } from 'react-redux'

type Props = {
  children:React.ReactNode
}

const AdminLayout = ({children}: Props) => {
  const {mobile} = useSelector((state:any)=>state.auth)
  return (
    <div className=' flex items-start bg-[#f9faff]'>
        <div className=' hidden md:block'>
            <AdminSidber/>
        </div>
        <div className={`md:hidden absolute top-0 duration-500 ${mobile ? " left-0" : "left-[-100%]"}`}>
            <AdminSidber/>
        </div>
        <div className=' w-full h-screen overflow-y-auto'>
            <AdminNav/>
            <div className='md:px-8 px-3 py-8'>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AdminLayout