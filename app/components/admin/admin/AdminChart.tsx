"use client"

import React from 'react'
import CarStatsChart from '../charts/CarStatsChart'

type Props = {}

const AdminChart = (props: Props) => {
  return (
    <div className=" w-full bg-white shadow-md rounded-lg p-5">
    
    <div className=' pb-5'>
        <h2 className=' text-text text-[25px] font-bold'>Course Order Chart</h2>
    </div>

    <div className=' h-[500px] w-full'>
        <CarStatsChart />
    </div>
</div>
  )
}

export default AdminChart