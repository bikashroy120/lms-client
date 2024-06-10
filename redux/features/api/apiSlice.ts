import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://lms-server-test.onrender.com/api/v1/",
        prepareHeaders: (headers) => {
            // Get the token from localStorage
            const tokenString = localStorage.getItem("token");
      
            if (tokenString !== null) {
              // Set the Bearer token in the headers
              const token = JSON.parse(tokenString);
              headers.set("Authorization", `Bearer ${token}`);
            }
      
            return headers;
          },
    }),
    endpoints:(builder)=>({
        refreshToken:builder.query({
            query:(data)=>({
                url:"refresh-token",
                method:"GET",
            })
        }),
        loadUser:builder.query({
            query:(data)=>({
                url:"me",
                method:"GET",
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({
                        accessToken:result.data.accessToken,
                        user:result.data.user,
                    }))
                } catch (error:any) {
                    console.log(error)
                }
            }
        })
    })
})

export const {useRefreshTokenQuery,useLoadUserQuery} = apiSlice