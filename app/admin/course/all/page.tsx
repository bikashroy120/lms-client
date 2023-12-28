"use client";

import CourseTable from "@/app/components/admin/allcourse/CourseTable";
import AdminLayout from "@/app/components/layout/AdminLayout";
import Table from "@/app/utils/Table";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { useGetAllCourseQuery } from "@/redux/features/courses/coursesApi";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import Select, { ActionMeta } from "react-select";
import { useDebounce } from 'use-debounce';

type Props = {};

type Option = {
  // Define properties of your Option type
  // For example:
  value: string;
  label: string;
  // Add more properties as needed
};

const Page = (props: Props) => {
  const [level, setLevel] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchQuery, sestSearchQuery] = useState("");
  const [category, setCategory] = useState<null | Option>(null);
  const [searchValue] = useDebounce(searchName, 1000);
 

  let itemsPerPage = 10;

  const {
    data: course,
    isError,
    isLoading,
    refetch
  } = useGetAllCourseQuery(searchQuery,{refetchOnMountOrArgChange:true});
  const { data } = useGetAllCategoryQuery("");


  const categoryAdd = (
    option: Option | null,
    actionMeta: ActionMeta<Option>
  ) => {
    setCategory(option);
  };


  const generateQuery = () => {
    const queryParams = [];

    if (category) {
      queryParams.push(`category=${category.value}`);
    }

    if (searchName) {
      queryParams.push(`search=${searchValue}`);
    }

    if (level) {
      queryParams.push(`level=${level}`);
    }
    // if (gender) {
    //   queryParams.push(`gender=${gender}`);
    // }
    // if (selectedStatus) {
    //   queryParams.push(`status=${selectedStatus}`);
    // }

    //---- Default userRole for "student"
    // queryParams.push("userRole=student");
    // queryParams.push(`underOfInst=${user?.id}`);

    return queryParams.join("&");
  };

  useEffect(() => {
    const query = generateQuery();
    sestSearchQuery(`${query}&page=1&limit=${itemsPerPage}`);
    refetch()
  }, [searchValue, category,level]);



  const handelClear = () => {
    setCategory(null);
  };

  return (
    <AdminLayout>
      <div>
        <h2 className=" font-semibold text-[25px]">All Course</h2>

        <div className=" mt-5 bg-white shadow-md rounded-lg">
          <div className="py-5 px-4 flex items-center justify-between gap-7">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search title..."
                value={searchName}
                onChange={(e: any) => setSearchName(e.target.value)}
                className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
              />
            </div>

            <div className="w-full">
              <div className=" w-full py-[5px]  border  rounded-lg border-gray-400 focus:outline-blue-500">
                <Select
                  defaultValue={category}
                  onChange={categoryAdd}
                  name="category"
                  options={data?.category?.map((child: any) => {
                    return { value: child?.title, label: child?.title };
                  })}
                  className=" "
                  id="choose_account_category"
                  placeholder="Category select"
                  classNamePrefix="select"
                />
              </div>
            </div>

            <div className="w-full">
              <select value={level} onChange={(e:any)=>setLevel(e.target.value)} className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500">
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div>
              <button onClick={handelClear}>clear</button>
            </div>
          </div>

          <div className=" border-b w-full flex items-center justify-center">
            <CourseTable course={course?.course} isLoading={isLoading} refetch={refetch}/>      
          </div>

          <div className=" py-5">
            {isLoading ? <> </> : <Pagination defaultCurrent={1} total={100} pageSize={10}  showSizeChanger={false}/>} 
          </div>
        </div>
        {/* <Table columns={columns} data={data}/> */}
      </div>
    </AdminLayout>
  );
};

export default Page;
