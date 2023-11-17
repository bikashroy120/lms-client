import React from 'react'
import AdminSidber from './AdminSidber'

type Props = {
  children:React.ReactNode
}

const AdminLayout = ({children}: Props) => {
  return (
    <div className=' flex items-start'>
        <div>
            <AdminSidber/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default AdminLayout