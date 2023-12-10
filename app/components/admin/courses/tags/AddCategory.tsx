"use client";

import {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
} from "@/redux/features/category/categoryApi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";
import { Pagination } from "antd";
import AdminButton from "@/app/components/ui/AdminButton";
import CategoryTable from "./CategoryTable";

type Props = {};

const AddCategory = (props: Props) => {
  const [title, setTitle] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // const [createCategory, { isLoading, isError, isSuccess, error }] =
  //   useCreateCategoryMutation();
  const { data,isLoading, refetch } = useGetAllCategoryQuery(
    searchQuery,{refetchOnMountOrArgChange:true}
  );
  const [searchValue] = useDebounce(searchName, 1000);

  let itemsPerPage = 10;

  // useEffect(() => {
  //   if (isSuccess) {
  //     const message = "Category add success";
  //     toast.success(message);
  //     setTitle("");
  //     refetch();
  //   }
  //   if (error) {
  //     if ("data" in error) {
  //       const errorData = error as any;
  //       toast.error(errorData.data.message);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // }, [isSuccess, error]);

  const generateQuery = () => {
    const queryParams = [];

    if (searchName) {
      queryParams.push(`search=${searchValue}`);
    }

    return queryParams.join("&");
  };

  useEffect(() => {
    const query = generateQuery();
    setSearchQuery(`${query}&page=1&limit=${itemsPerPage}`);
    refetch();
  }, [searchValue]);

  // const handelSubmit = async () => {
  //   if (!title) {
  //     return toast.error("give a title");
  //   }
  //   const data = {
  //     title: title,
  //   };

  //   await createCategory(data);
  // };

  console.log(data);

  return (
    <div>
    <h2 className=" font-semibold text-[25px]">All Category</h2>

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

        <div className="w-full flex items-center justify-end ">
          <AdminButton title={"Add Category"} variant={"fill"}/>
        </div>

      </div>

      <div className=" border-b w-full flex items-center justify-center">
        {/* <CategoryTable course={course?.course} isLoading={isLoading} refetch={refetch}/>       */}
      </div>

      <div className=" py-5">
        {isLoading ? <> </> : <Pagination defaultCurrent={1} total={100} pageSize={10}  showSizeChanger={false}/>} 
      </div>
    </div>
    {/* <Table columns={columns} data={data}/> */}
  </div>
  );
};

export default AddCategory;
