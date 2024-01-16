"use client";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useUpdateMutation } from "@/redux/features/auth/authApi";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BiCamera } from "react-icons/bi";

type Props = {
  user: any;
};

const ProfileInfo = ({ user }: Props) => {
  const [imageUrl, setImageUrl] = useState<any>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });
  const [update, { isLoading, isError, data, error, isSuccess }] =
    useUpdateMutation();

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

  const updateProfile = async () => {
    await update({
      name: name,
      avater: imageUrl,
      phone,
      address,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Profile update success";
      toast.success(message);
      setLoadUser(true);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        console.log(error);
      }
    }
  }, [isSuccess, error]);

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setPhone(user?.phone)
    setAddress(user?.address)
    setImageUrl(user.avater)
  }, [user]);

  return (
    <div>
      <div className=" flex items-center justify-center flex-col w-full gap-5 mt-10">
        <div className=" w-[100px] h-[100px] border-2 border-primaryDark relative rounded-full ">
          <Image
            src={imageUrl ? imageUrl : user.avater ? user.avater : "/user.png"}
            width="100"
            height="2"
            alt="category image"
            className="w-full h-full rounded-full object-contain "
          />
          <button className=" absolute bg-black p-1 cursor-pointer rounded-full z-10 bottom-[5px] right-[0px] text-white ">
            <BiCamera size={17} className=" cursor-pointer" />
            <input
              type="file"
              onChange={handleImageUpload}
              className="opacity-0 absolute z-0 top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
            />
          </button>
        </div>

        <div className=" flex items-center flex-col 800px:w-[700px] w-full gap-5">
          <div className="w-full">
            <label htmlFor="">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="py-2 px-2 border-2 border-gray-500 bg-transparent w-full outline-none rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              disabled
              className="py-2 px-2 border-2 border-gray-500 bg-transparent w-full outline-none rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="py-2 px-2 border-2 border-gray-500 bg-transparent w-full outline-none rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="py-2 px-2 border-2 border-gray-500 bg-transparent w-full outline-none rounded-lg"
            />
          </div>
          <div>
            <button
              onClick={() => updateProfile()}
              className="py-2 px-5 bg-purple-400 rounded-lg"
            >
              {isLoading ? "Loading.." : "submit"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
