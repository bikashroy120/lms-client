"use client"

import Container from '@/app/utils/Container'
import TopHeading from '@/app/utils/TopHeading'
import React from 'react'
import CustomButton from '../../ui/CustomButton'
import { useRouter } from 'next/navigation'
import { useGetAllCourseQuery } from '@/redux/features/courses/coursesApi'
import ProductCard from './ProductCard'

type Props = {}

const HomeProduct = (props: Props) => {

  const router = useRouter()

  const {
    data: courses,
    isError,
    isLoading,
    refetch
  } = useGetAllCourseQuery("",{refetchOnMountOrArgChange:true});


  return (
    <div className="hero_background">
      <Container>
          <div className='lg:py-[100px] py-5'>
            <div className=" flex items-center justify-between">
              <TopHeading
                title="Featured Courses"
                topTitle="What’s New"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                  accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
                 imperdiet."
              />
              <div className=" w-full flex items-center justify-end">
                  <CustomButton title="All Courses" handelClick={()=>router.push("/admin")}/>
              </div>
            </div>

            <div className='pt-10'>
                {
                  isLoading ? <>
                    <div>
                      Loading.....
                    </div>
                  </> : <>
                    <div className=' grid grid-cols-3 gap-5'>
                        {
                          courses?.course?.map((course:any,index:number)=>(
                            <div key={index}>
                              <ProductCard course={course}/>
                            </div>
                          ))
                        }
                    </div>
                  </>
                }
            </div>
          </div>
      </Container>
    </div>
  )
}

export default HomeProduct