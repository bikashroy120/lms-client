
import {apiSlice} from "../api/apiSlice"
import {userLoggedIn, userRegistration,} from "./authSlice"




type RegistrationResponse = {
    message:string;
    token:string;
    code:number
}

type LoginResponse = {

}

type RegistrationData = {

}


export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation<RegistrationResponse,RegistrationData>({
            query:(data)=>({
                url:"regester",
                method:"POST",
                body:data,
                credentials:"include" as const,
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(userRegistration({
                        token:result.data.token,
                        code:result.data.code,
                    }))
                } catch (error:any) {
                    console.log(error)
                }
            }
        }),
        activation:builder.mutation({
            query:({token, activitonnCode})=>({
                url:"activate-user",
                method:"POST",
                body:{
                    token, 
                    activitonnCode
                },
            })
        }),
        login:builder.mutation({
            query:({email, password})=>({
                url:"login",
                method:"POST",
                body:{
                    email, 
                    password
                },
                credentials:"include" as const,
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

export const {useRegisterMutation,useActivationMutation,useLoginMutation} = authApi;