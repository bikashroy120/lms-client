import { useGetSingleCourseQuery } from '../../../redux/features/courses/coursesApi';
import React from 'react'
import Loader from '../Loader/Loader';
import Container from '../../utils/Container';

type Props = {
  id:any
}

const CourseAccess = ({id}: Props) => {

  const { data, isLoading } = useGetSingleCourseQuery(id);

  return (
    <div className="bg-[#fafafa]">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Container>
            <div>

            </div>
          </Container>
        </>
      )}
    </div>
  )
}

export default CourseAccess