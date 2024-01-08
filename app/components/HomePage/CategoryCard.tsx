import { addCategory } from "@/redux/features/auth/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  card: any;
};

const CategoryCard = ({ card }: Props) => {

  const router = useRouter()
  const dispatch = useDispatch()
  const handelSet = (title:string)=>{
    dispatch(addCategory(title))
    router.push("/course")
  }

  return (
    <div onClick={()=>handelSet(card?.title)} className=" w-full p-6 flex items-center justify-center flex-col cursor-pointer hover:bg-text duration-300 group border rounded-lg">
      <div className="w-[100px] h-[100px]">
        <Image
          src={card?.image}
          width={300}
          height={300}
          alt="category"
          className="w-full h-full object-fill"
        />
      </div>
      <div>
        <h2 className="text-[16px] group-hover:text-white mt-5 font-medium">{card?.title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
