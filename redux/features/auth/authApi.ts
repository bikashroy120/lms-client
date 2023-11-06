
import {apiSlice} from "../api/apiSlice"
import {userRegistration} from "./authSlice"




type RegistrationResponse = {
    message:string;
    token:string;
    code:number
}

type RegistrationData = {

}


export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation<RegistrationResponse,RegistrationData>({
            query:(data)=>({
                url:"regester",
                method:"POST",
                body:"data",
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
        })
    })
})

export const {useRegisterMutation,useActivationMutation} = authApi;