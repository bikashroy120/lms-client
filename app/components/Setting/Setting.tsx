"use client";

import { useGetLayoutQuery, useUpdateLayoutMutation } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import AdminButton from "../ui/AdminButton";
import toast from "react-hot-toast";

type Props = {};

const Setting = (props: Props) => {
    const [title,setTitle]=useState("")
    const [subTitle,setSubTitle]=useState("")
    const [Trusted,setTrusted]=useState("")
    const [image,setImage]=useState("")
    const [review,setReview]=useState("")
    const [Courses,setCourses]=useState("")
    const [Tutors,setTutors]=useState("")
    const [Certified,setCertified]=useState("")
    const [Students,setStudents]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [text,setText]=useState("")
    const [links,setLinks]=useState("")

    const {isLoading:loading,data,isSuccess:successLoad, refetch}  = useGetLayoutQuery("type=Home")
    const [updateLayout,{isError,isSuccess,isLoading,error}] = useUpdateLayoutMutation()

    useEffect(()=>{
      if(isSuccess){
        const message =  "Data update success"
        toast.success(message)
        refetch()
      }
      if(error){
        if("data" in error){
          const errorData = error as any;
          toast.error(errorData.data.message)
        }else{
          console.log(error)
        }
      }
    },[isSuccess,error])

    console.log("data is====",data?.data?.home)

    useEffect(()=>{
      setTitle(data?.data?.home?.title)
      setSubTitle(data?.data?.home?.subTitle)
      setTrusted(data?.data?.home?.Trusted)
      setImage(data?.data?.home?.image)
      setReview(data?.data?.home?.review)
      setCourses(data?.data?.home?.Courses)
      setTutors(data?.data?.home?.Tutors)
      setCertified(data?.data?.home?.Certified)
      setStudents(data?.data?.home?.Students)
      setPhone(data?.data?.home?.phone)
      setEmail(data?.data?.home?.email)
      setAddress(data?.data?.home?.address)
      setText(data?.data?.home?.text)
    },[successLoad,data])


    const imgUrl = `https://api.imgbb.com/1/upload?key=8afa748431eb08431e4d3e8918c75005`;
    const handleImageUpload = (e: any) => {
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      fetch(imgUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          setImage(result.data?.url);
        });
    };

  const handelSubmit = async(e: any) => {
    e.preventDefault();
    console.log("hello");

    const data = {
      type:"Home",
      title,
      subTitle,
      Trusted,
      review,
      image,
      Courses,
      Tutors,
      Certified,
      Students,
      phone,
      email,
      address,
      text,
      links,
    }

    await updateLayout(data)
  };

  return (
    <div className=" bg-white shadow-md w-full p-5 rounded-lg mt-5">
      <form onSubmit={handelSubmit}>
        <div className="flex items-center gap-6">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Title
            </label>
            <input
              type="text"
              id="name"
              value={title}
              onChange={(e:any)=>setTitle(e.target.value)}
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Sub Title
            </label>
            <input
              type="text"
              value={subTitle}
              onChange={(e:any)=>setSubTitle(e.target.value)}
              id="name"
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Trusted
            </label>
            <input
              type="text"
              id="name"
              value={Trusted}
              onChange={(e:any)=>setTrusted(e.target.value)}
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home review
            </label>
            <input
              type="number"
              value={review}
              onChange={(e:any)=>setReview(e.target.value)}
              id="name"
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
        </div>


        <div className="flex items-center gap-6">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Course
            </label>
            <input
              type="number"
              id="name"
              value={Courses}
              onChange={(e:any)=>setCourses(e.target.value)}
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Certified
            </label>
            <input
              type="number"
              value={Certified}
              onChange={(e:any)=>setCertified(e.target.value)}
              id="name"
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Tutors
            </label>
            <input
              type="number"
              id="name"
              value={Tutors}
              onChange={(e:any)=>setTutors(e.target.value)}
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Home Students
            </label>
            <input
              type="number"
              value={Students}
              onChange={(e:any)=>setStudents(e.target.value)}
              id="name"
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
        </div>


        <div className="flex items-center gap-6">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Phone
            </label>
            <input
              type="text"
              id="name"
              value={phone}
              onChange={(e:any)=>setPhone(e.target.value)}
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e:any)=>setEmail(e.target.value)}
              id="name"
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Address
            </label>
            <input
              type="text"
              id="name"
              value={address}
              onChange={(e:any)=>setAddress(e.target.value)}
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Text
            </label>
            <input
              type="text"
              value={text}
              onChange={(e:any)=>setText(e.target.value)}
              id="name"
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Name"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
        <div className="w-full my-3">
          <div className="md:flex items-center gap-2">
            {/* <p className="text-info text-lg font-bold">Icon:</p> */}
            <div className="relative border-4 border-gray-400 border-dashed w-full h-[100px]  text-center flex items-center justify-center flex-col">
              <p className="text-xl font-bold  text-slate-900">
                Drag your image here
              </p>
              <span className="text-xs font-bold text-slate-900">
                (Only *.jpeg and *.png images will be accepted)
              </span>
              <input
                type="file"
                onChange={handleImageUpload}
                className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
              />
            </div>
          </div>
          {image && (
            <div className="flex justify-center sm:justify-start ">
              <div className="  w-[200px] h-auto p-1 bg-white shadow-md rounded-md mt-3 ">
                <Image
                  src={image}
                  width="200"
                  height="200"
                  alt="category image"
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full">

        </div>
        </div>
        <div className="flex items-center justify-center">
            <AdminButton className="w-[300px]" variant="fill" title={isLoading ? "loading" : "Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Setting;
