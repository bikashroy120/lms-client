import React from 'react'
import CourseSearch from './CourseSearch'
import FilterCategory from './FilterCategory'
import FilterLevel from './FilterLevel';

type Props = {
  setQuery:any;
  setPage:any;
}

const CourseLeft = ({setQuery,setPage}: Props) => {
  return (
    <div>
        <CourseSearch setQuery={setQuery} setPage={setPage}/>
        <FilterCategory setQuery={setQuery} setPage={setPage}/>
        <FilterLevel setQuery={setQuery} setPage={setPage}/>
    </div>
  )
}

export default CourseLeft