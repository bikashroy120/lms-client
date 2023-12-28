import Image from "next/image";
import React from "react";

type Props = {
  card: any;
};

const CategoryCard = ({ card }: Props) => {
  return (
    <div className=" w-full p-6 flex items-center justify-center flex-col cursor-pointer hover:bg-text duration-300 group border rounded-lg">
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
