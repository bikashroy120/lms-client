"use client";

import Image from "next/image";
import React, { useState,useEffect } from "react";
import { BiCamera } from "react-icons/bi";

type Props = {
  user: any;
};

const ProfileInfo = ({ user }: Props) => {
  const [imageUrl, setImageUrl] = useState<any>();
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
  const imgUrl = `https://api.imgbb.com/1/upload?key=${"ab3e927fbb2142be370cd6e16ff2fdee"}`;
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
        setImageUrl(result.data?.url);
      });
  };

  useEffect(() => {
        setName(user?.name)
        setEmail(user?.email)
  }, [user])
  

  return (
    <div>
      <div>
        <div className=" w-[100px] h-[100px] border-2 border-primaryDark relative rounded-full ">
          <Image
            src={imageUrl ? imageUrl : user.avater ? user.avater : "/user.png"}
            width="100"
            height="2"
            alt="category image"
            className="w-full h-full rounded-full object-contain "
          />
          <button className=" absolute bg-black p-1 cursor-pointer rounded-full z-10 bottom-[5px] right-[0px] text-white ">
            <BiCamera size={17} className=" cursor-pointer"/>
            <input
              type="file"
              onChange={handleImageUpload}
              className="opacity-0 absolute z-0 top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
            />
          </button>
        </div>
        
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="py-2 px-2 border border-primaryDark bg-transparent text-white"  />
        </div>

      </div>
    </div>
  );
};

export default ProfileInfo;
