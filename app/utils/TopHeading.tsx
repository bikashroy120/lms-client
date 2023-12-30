import React from "react";

type Props = {
    topTitle:string;
    title:string;
    sub:string;
};

const TopHeading = ({topTitle,title,sub}: Props) => {
  return (
    <div>
      <h3 className=" text-[18px] font-medium text-primary">{topTitle}</h3>
      <h2 className=" text-[25px] lg:text-[35px] py-2 font-bold text-text">{title}</h2>
      <p className=" hidden lg:block text-base font-medium text-lightText">{sub}</p>
    </div>
  );
};

export default TopHeading;
