"use client";

import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Select, { ActionMeta } from "react-select";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
};

type Option = {
  // Define properties of your Option type
  // For example:
  value: string;
  label: string;
  // Add more properties as needed
};

const CourseInformation = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}: Props) => {
  const {data} = useGetAllCategoryQuery({},{refetchOnMountOrArgChange:true})
  const [tag, setTag] = useState<null | Option[]>(null);
  const tagsData = ["HTML", "Javascript", "MySQL", "PHP"];
  const handelSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };

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
        setCourseInfo({ ...courseInfo, thumbnail: result.data?.url });
      });
  };



  useEffect(()=>{

  },[tag])

  const onChange = (
    option: readonly Option[],
    actionMeta: ActionMeta<Option>
  ) => {
    setTag([...option])
  };

  const categoryAdd = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    console.log(option)
 }

  return (
    <div className="p-8">
      <h2 className=" text-2xl font-semibold">Course Information</h2>

      <form onSubmit={handelSubmit}>
        <div className=" flex items-start flex-col gap-1 py-3">
          <label className=" text-black font-semibold text-sm" htmlFor="name">
            Course Name
          </label>
          <input
            type="text"
            required
            id="name"
            value={courseInfo.name}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
            placeholder="Enter Course Name"
          />
        </div>

        <div className=" flex items-start flex-col gap-1 py-3">
          <label className=" text-black font-semibold text-sm" htmlFor="name">
            Description
          </label>
          <textarea
            name=""
            id=""
            required
            value={courseInfo.description}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
            className=" w-full py-2 px-3 border  rounded-lg border-gray-400 h-[150px] focus:outline-blue-500"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Course price
            </label>
            <input
              type="number"
              required
              id="name"
              value={courseInfo.price}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              className=" w-full py-3 px-3 border rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course price"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Course Estimated Price
            </label>
            <input
              type="number"
              required
              id="name"
              value={courseInfo.estimatedPrise}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, estimatedPrise: e.target.value })
              }
              className=" w-full py-3 px-3 border rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Estimated Price"
            />
          </div>
        </div>

        <div className=" flex items-start flex-col gap-1 py-3 w-full">
          <label className=" text-black font-semibold text-sm" htmlFor="name">
            Course Category
          </label>
          <div className=" w-full py-2  border  rounded-lg border-gray-400 focus:outline-blue-500">
            <Select
              defaultValue={tag}
              onChange={categoryAdd}
              name="category"
              required
              options={data?.category?.map((child:any) => {
                return { value: child?._id, label: child?.title }
              })}
              className=" "
              id="choose_account_category"
              classNamePrefix="select"
            />
          </div>
        </div>

        <div className=" flex items-start flex-col gap-1 py-3 w-full">
          <label className=" text-black font-semibold text-sm" htmlFor="name">
            Course Tags
          </label>
          <div className=" w-full py-2  border  rounded-lg border-gray-400 focus:outline-blue-500">
            <Select
              defaultValue={tag}
              onChange={onChange}
              isMulti
              name="colors"
              required
              options={tagsData.map((child) => {
                return { value: child, label: child };
              })}
              className=" "
              id="choose_account_category"
              classNamePrefix="select"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Course Level
            </label>
            <input
              type="text"
              required
              id="name"
              value={courseInfo.level}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              className=" w-full py-3 px-3 border rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course Level"
            />
          </div>
          <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Course Demo Url
            </label>
            <input
              type="text"
              required
              id="name"
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Estimated Price"
            />
          </div>
        </div>

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
          {courseInfo?.thumbnail && (
            <div className="flex justify-center sm:justify-start ">
              <div className="  w-[200px] h-auto p-1 bg-white shadow-md rounded-md mt-3 ">
                <Image
                  src={courseInfo?.thumbnail}
                  width="200"
                  height="200"
                  alt="category image"
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          )}
        </div>

        <div className=" flex justify-end">
          <button
            type="submit"
            className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;
