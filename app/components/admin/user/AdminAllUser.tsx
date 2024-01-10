"use client";

import { useGetAllUserQuery } from "@/redux/features/auth/authApi";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import UserTable from "./UserTable";
import { Pagination } from "antd";

type Props = {};

const AdminAllUser = (props: Props) => {
  const [searchName, setSearchName] = useState("");
  const [searchQuery, sestSearchQuery] = useState("");
  const [searchValue] = useDebounce(searchName, 1000);
  let itemsPerPage = 10;
  const {
    data: user,
    isError,
    isLoading,
    refetch,
  } = useGetAllUserQuery(searchQuery, { refetchOnMountOrArgChange: true });

  const generateQuery = () => {
    const queryParams = [];
    if (searchName) {
      queryParams.push(`search=${searchValue}`);
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
  }, [searchValue]);


  console.log(user)

  return (
    <div className=" mt-5 bg-white shadow-md rounded-lg">
      <div className="py-5 px-4 flex items-center justify-between gap-7">
        <div className=" lg:w-[50%] w-full">
          <input
            type="text"
            placeholder="Search title..."
            value={searchName}
            onChange={(e: any) => setSearchName(e.target.value)}
            className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500"
          />
        </div>

        {/* <div className="w-full">
        <select value={level} onChange={(e:any)=>setLevel(e.target.value)} className=" w-full py-3 px-3 border  rounded-lg border-gray-400 focus:outline-blue-500">
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div> */}
      </div>

      <div className=" border-b w-full flex items-center justify-center">
        <UserTable users={user?.users} isLoading={isLoading} refetch={refetch}/>      
      </div>

      <div className=" py-5">
        {isLoading ? <> </> : <Pagination defaultCurrent={1} total={100} pageSize={10}  showSizeChanger={false}/>} 
      </div>
    </div>
  );
};

export default AdminAllUser;
