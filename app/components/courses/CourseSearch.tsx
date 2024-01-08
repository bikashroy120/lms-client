"use client"

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useDebounce } from 'use-debounce';
import {  usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
    setQuery:any
}

const CourseSearch = ({setQuery}: Props) => {
    const [search,setSearch] = useState("")
    const [searchValue] = useDebounce(search, 1000); 
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    useEffect(()=>{
        const params = new URLSearchParams(searchParams)
        if(searchValue){
            params.set("search",searchValue)
        }else{
            params.delete("search")
        }
        replace(`${pathName}?${params}`)
    },[searchValue])


  return (
    <div className=' border border-gray-300 rounded-lg bg-white p-4'>
        <div className='border border-gray-300 px-3 bg-white rounded-lg w-full flex items-center'>
            <Icon icon="iconamoon:search" className=' text-primary'/>
            <input type="text" value={search} onChange={(e:any)=>setSearch(e.target.value)} placeholder='Search' className=' py-3 px-2 w-full border-none outline-none'/>
        </div>
    </div>
  )
}

export default CourseSearch