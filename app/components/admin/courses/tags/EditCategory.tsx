import Image from 'next/image';
import CustomDrawer from '../../../ui/CustomDrawer';
import React, { useEffect, useState } from 'react'
import { useGetSingleCategoryQuery, useUpdateCategoryMutation } from '../../../../../redux/features/category/categoryApi';
import toast from 'react-hot-toast';
import AdminButton from '../../../ui/AdminButton';

type Props = {
  open:boolean;
  setOpen:(open:boolean)=>void;
  refetch:any;
  id:string | null;
}

const EditCategory = ({open,setOpen,refetch,id}: Props) => {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [image,setImage] = useState<string | null>(null)
  const {data} = useGetSingleCategoryQuery(id)
  const [updateCategory, { isLoading, isError, isSuccess, error }] = useUpdateCategoryMutation();

    useEffect(() => {
    if (isSuccess) {
      const message = "Category update success";
      toast.success(message);
      setTitle("");
      setDescription("")
      setImage(null)
      refetch();
      setOpen(false)
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

  useEffect(()=>{
    setTitle(data?.category?.title)
    setImage(data?.category?.image)
    setDescription(data?.category?.description)
  },[data])

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


    const handelSubmit = async () => {
    if (!title && !description && !image) {
      return toast.error("fill all data");
    }
    const data = {
      title: title,
      description:description,
      image:image,
    };
    await updateCategory({id,data});
  };

  

  return (
    <CustomDrawer open={open} setOpen={setOpen} title='Update Category'>
      <div className=''>
      <div className=" flex items-start flex-col gap-1 py-3 w-full">
            <label className=" text-black font-semibold text-sm" htmlFor="name">
              Category Title
            </label>
            <input
              type="text"
              required
              id="name"
              value={title}
              onChange={(e:any)=>setTitle(e.target.value)}
              className=" w-full py-3 px-3 border rounded-lg border-gray-400 focus:outline-blue-500"
              placeholder="Enter Course price"
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
            value={description}
            onChange={(e:any)=>setDescription(e.target.value)}
            className=" w-full py-2 px-3 border  rounded-lg border-gray-400 h-[150px] focus:outline-blue-500"
            placeholder="Enter description"
          ></textarea>
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

        <div className=' mt-10'>
            <AdminButton title={isLoading ?" Loading..." : "Update Category"} handelClick={handelSubmit} variant="fill" />
        </div>
      </div>
    </CustomDrawer>
  )
}

export default EditCategory