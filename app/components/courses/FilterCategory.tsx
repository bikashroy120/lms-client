"use client";

import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import React, { useEffect, useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checkbox } from "antd";
import { Icon } from "@iconify/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

type Props = {
  setQuery: any;
};

const FilterCategory = ({ setQuery }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const { category } = useSelector((state: any) => state.auth);
  // const {replace} = useRouter();
  // const pathName = usePathname();
  const { data } = useGetAllCategoryQuery("", {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if(category){
      setSelectedCategories([category])
    }
  }, [category]);

  const categoryAdd = (title: string) => {
    const isSelected = Boolean(
      selectedCategories.find((grpStud: string) => grpStud === title)
    );
    if (isSelected) {
      const updateData = selectedCategories.filter(
        (item: string) => item !== title
      );
      setSelectedCategories(updateData);
    } else {
      setSelectedCategories((prev: string[]) => [...prev, title]);
    }
  };

  const getProducts = async () => {
    const params = new URLSearchParams();
    selectedCategories.forEach((category) => {
      params.append("category", category);
    });
    const url = `${params.toString()}`;
    setQuery(url);
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategories]);

  return (
    <div className=" bg-white rounded-lg p-5 border border-gray-300 mt-5">
      <h2 className=" text-text text-[20px] font-semibold">
        Course Categories
      </h2>
      <div className=" mt-5 flex items-start flex-col gap-2">
        {data?.category?.map((item: any, index: number) => {
          const isSelected = Boolean(
            selectedCategories.find(
              (grpStud: string) => grpStud === item?.title
            )
          );
          return (
            <div className="" key={index}>
              <Checkbox
                onClick={() => categoryAdd(item?.title)}
                checked={isSelected}
              >
                <span className=" text-[18px] text-lightText font-medium">
                  {item?.title}
                </span>
              </Checkbox>
            </div>
          );
        })}
      </div>
      <div className=" flex items-center justify-center mt-2">
        <button
          onClick={() => setSelectedCategories([])}
          className=" py-2 px-4 text-[14px] font-bold rounded-full border-2 text-text border-red-400 hover:bg-red-400 hover:text-white"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterCategory;
