import React from 'react'
import AdminSidber from './AdminSidber'
import AdminNav from './AdminNav'

type Props = {
  children:React.ReactNode
}

const AdminLayout = ({children}: Props) => {
  return (
    <div className=' flex items-start bg-[#f9faff]'>
        <div>
            <AdminSidber/>
        </div>
        <div className=' w-full h-screen overflow-y-auto'>
            <AdminNav/>
            <div className='px-8 py-8'>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AdminLayout