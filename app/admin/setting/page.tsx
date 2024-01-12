import Setting from '@/app/components/Setting/Setting'
import AdminLayout from '@/app/components/layout/AdminLayout'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <AdminLayout>
    <div>
        <h2 className=" font-semibold text-[25px]">Page Setting</h2>
        <Setting/>
    </div>
</AdminLayout>
  )
}

export default page