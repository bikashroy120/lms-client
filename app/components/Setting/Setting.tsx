"use client"

import React from 'react'

type Props = {}

const Setting = (props: Props) => {

    


    const handelSubmit = (e: any) => {
        e.preventDefault();
        console.log("hello")
      };


  return (
    <div className=' bg-white shadow-md w-full p-5 rounded-lg mt-5'>
        <form onSubmit={handelSubmit}>
        <div className=" flex items-start flex-col gap-1 py-3">
          <label className=" text-black font-semibold text-sm" htmlFor="name">
            Course Name
          </label>
          <input
            type="text"
            required
            id="name"

            className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
            placeholder="Enter Course Name"
          />
        </div>
        </form>
    </div>
  )
}

export default Setting