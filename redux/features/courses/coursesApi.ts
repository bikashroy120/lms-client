import {apiSlice} from "../api/apiSlice";


export const courseApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createCourse:builder.mutation({
            query:(data)=>({
                url:"course/create-course",
                method:"POST",
                body:data,
                credentials:"include" as const,
            })
        }),
        getAllCourse:builder.query({
            query:(query:any)=>({
                url:`course/all-course?${query}`,
                method:"GET",
                credentials:"include" as const,
            })
        }),
        getSingleCourse:builder.query({
            query:(query:any)=>({
                url:`course/${query}`,
                method:"GET",
                credentials:"include" as const, 
            })
        })
    })
})


export const {useCreateCourseMutation,useGetAllCourseQuery,useGetSingleCourseQuery} = courseApi;