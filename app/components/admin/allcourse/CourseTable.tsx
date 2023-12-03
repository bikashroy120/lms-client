import React from 'react'

type Props = {
  course:any;
  isLoading:boolean
}

const CourseTable = ({course,isLoading}: Props) => {

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
    },
    {
      name: "Roll",
      selector: (row: any) => row.roll,
    },
    {
      name: "Age",
      selector: (row: any) => row.age,
    },
  ];

  return (
    <div>
        
    </div>
  )
}

export default CourseTable