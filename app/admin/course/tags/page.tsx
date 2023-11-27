import AddCategory from '@/app/components/admin/courses/tags/AddCategory'
import AddTags from '@/app/components/admin/courses/tags/AddTags'
import AdminLayout from '@/app/components/layout/AdminLayout'
import React from 'react'

type Props = {}

const Tags = (props: Props) => {
  return (
    <AdminLayout>
        <div className='flex items-start justify-between gap-8'>
            <div className=' w-full'>
                <AddTags/>
            </div>
            <div className=' w-full'>
                <AddCategory/>
            </div>
        </div>
    </AdminLayout>
  )
}

export default Tags