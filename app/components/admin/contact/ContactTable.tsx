"use client";

import Loader2 from "@/app/utils/Loader2/Loader2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Table from "@/app/utils/Table";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import swal from "sweetalert";
import ViewContact from "./ViewContact";
import { format } from "timeago.js";
import { useDeleteContactMutation } from "@/redux/features/contact/contactApi";


type Props = {
  users: any;
  isLoading: boolean;
  refetch: any;
};

const ContactTable = ({ users, isLoading, refetch }: Props) => {
  const router = useRouter();

  const [deleteContact,{isSuccess,error}] = useDeleteContactMutation()


  useEffect(()=>{
    if(isSuccess){
      swal("Successfully deleted!", {
        icon: "success",
      });
      refetch()
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        swal(errorData.data.message, {
          icon: "warning",
        });
      }else{
        console.log(error)
      }
    }
  },[isSuccess,error])


  const columns = [
    {
      name: "Name",
      selector: (row: any) => row?.name,
    },
    {
      name: "Email",
      selector: (row: any) => row?.email,
    },
    {
      name: "Phone",
      selector: (row: any) => row?.phone,
    },
    {
      name: "Message",
      selector: (row: any) => row?.message,
      width:"300px"
    },
    {
        name: "Time",
        selector: (row: any) => format(row?.createdAt),
      },
    {
      name: "Action",
      width:"100px",
      cell: (row: any) => (
        <>
          <div className=" flex flex-row items-center gap-5">
            {/* <button><HiOutlineViewfinderCircle /></button> */}
            <ViewContact row={row} />
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
    await deleteContact(id)
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

export default ContactTable;
