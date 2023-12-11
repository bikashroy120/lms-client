import {apiSlice} from "../api/apiSlice";


export const categoryApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createCategory:builder.mutation({
            query:(data)=>({
                url:"create-category",
                method:"POST",
                body:data,
                credentials:"include" as const,
            })
        }),
        getAllCategory:builder.query({
            query:(query:any)=>({
                url:`all-category?${query}`,
                method:"GET",
                credentials:"include" as const,
            })
        }),
        deleteCategory:builder.mutation({
            query:(id:any)=>({
                url:`delete-category/${id}`,
                method:"DELETE",
                credentials:"include" as const,
            })
        }),
        updateCategory:builder.mutation({
            query:({id,data})=>({
                url:`edit-category/${id}`,
                method:"PUT",
                body:data,
                credentials:"include" as const,
            })
        }),
        getSingleCategory:builder.query({
            query:(id:any)=>({
                url:`single-category/${id}`,
                method:"GET",
                credentials:"include" as const,
            })
        }),
    })
})


export const {useCreateCategoryMutation,useGetAllCategoryQuery,useDeleteCategoryMutation,useGetSingleCategoryQuery,useUpdateCategoryMutation} = categoryApi;