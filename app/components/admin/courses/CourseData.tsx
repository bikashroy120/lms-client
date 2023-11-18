import React from 'react'

type Props = {
  benefits:{title:string}[];
  setBenefits:(benefits:{title:string}[])=>void;
  prerequistions:{title:string}[];
  setPrerequistions:(prerequistions:{title:string}[])=>void;
  active:number;
  setActive:(active:number)=>void;
}

const CourseData = ({benefits,setBenefits,prerequistions,setPrerequistions,active,setActive}: Props) => {
  return (
    <div>

    </div>
  )
}

export default CourseData