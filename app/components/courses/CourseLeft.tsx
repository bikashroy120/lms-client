import React from 'react'
import CourseSearch from './CourseSearch'
import FilterCategory from './FilterCategory'

type Props = {
  setQuery:any;
}

const CourseLeft = ({setQuery}: Props) => {
  return (
    <div>
        <CourseSearch />
        <FilterCategory setQuery={setQuery}/>
    </div>
  )
}

export default CourseLeft