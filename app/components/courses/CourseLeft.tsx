import React from 'react'
import CourseSearch from './CourseSearch'
import FilterCategory from './FilterCategory'
import FilterLevel from './FilterLevel';

type Props = {
  setQuery:any;
}

const CourseLeft = ({setQuery}: Props) => {
  return (
    <div>
        <CourseSearch setQuery={setQuery}/>
        <FilterCategory setQuery={setQuery}/>
        <FilterLevel setQuery={setQuery}/>
    </div>
  )
}

export default CourseLeft