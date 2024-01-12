
import AllContact from '@/app/components/admin/contact/AllContact'
import AdminLayout from '@/app/components/layout/AdminLayout'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <AdminLayout>
        <div>
            <h2 className=" font-semibold text-[25px]">All Contact</h2>
            <AllContact />  
        </div>
    </AdminLayout>
  )
}

export default page