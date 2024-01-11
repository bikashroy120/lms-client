import AllOrder from '@/app/components/admin/order/AllOrder'
import AdminLayout from '@/app/components/layout/AdminLayout'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <AdminLayout>
        <div>
            <h2 className=" font-semibold text-[25px]">All Order</h2>
            <AllOrder />
        </div>
    </AdminLayout>
  )
}

export default page