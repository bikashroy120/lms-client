"use client";

import Loader2 from "@/app/utils/Loader2/Loader2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Table from "@/app/utils/Table";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import swal from "sweetalert";

type Props = {
  users: any;
  isLoading: boolean;
  refetch: any;
};

const UserTable = ({ users, isLoading, refetch }: Props) => {
  const router = useRouter();
  const columns = [
    {
      name: "Image",
      selector: (row: any) => (
        <>
          <Image
            src={row?.avater}
            width={50}
            height={50}
            alt="logo"
            className=" w-[40px] h-[40px] rounded-md"
          />
        </>
      ),
      width: "100px",
    },
    {
      name: "Name",
      selector: (row: any) => row?.name,
    },
    {
      name: "Email",
      selector: (row: any) => row?.email,
    },
    {
      name: "Purchased",
      selector: (row: any) => row?.courses?.length,
    },
    {
      name: "Address",
      selector: (row: any) => row?.address,
    },
    {
      name: "Action",
      width: "140px",
      cell: (row: any) => (
        <>
          <div className=" flex flex-row items-center gap-5">
            {/* <button><HiOutlineViewfinderCircle /></button> */}
            <button
              onClick={() => handelEdit(row._id)}
              className=" text-[20px] hover:text-green-500"
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => handelDelete(row._id)}
              className=" text-[20px] hover:text-red-500"
            >
              <AiTwotoneDelete />
            </button>
          </div>
        </>
      ),
    },
  ];

  const handelEdit = (id: any) => {
    // router.push(`/admin/course/edit-course/${id}`)
  };

  const handelDelete = async (id: any) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product.",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteItemFun(id);
      } else {
        swal("Course is safe!");
      }
    });
  };

  const deleteItemFun = async (id: any) => {
    console.log(id);
    // await deleteCourse(id)
  };

  return (
    <>
      <div className=" w-full flex items-center justify-center">
        {isLoading ? (
          <div className="py-5">
            <Loader2 />{" "}
          </div>
        ) : (
          <Table columns={columns} data={users} />
        )}
      </div>
    </>
  );
};

export default UserTable;
