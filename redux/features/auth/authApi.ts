import { type } from "os"
import {apiSlice} from "../api/apiSlice"
import {userRegistration} from "./authSlice"
import build from "next/dist/build";



type RegistrationResponse = {
    message:string;
    activationToken:string;
}

type RegistrationData = {

}


export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation<RegistrationResponse,RegistrationData>({
            query:(data)=>({
                url:"registration",
                method:"POST",
                body:"data",
                credentials:"include" as const,
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(userRegistration({
                        token:result.data.activationToken
                    }))
                } catch (error:any) {
                    console.log(error)
                }
            }
        })
    })
})

export const {useRegisterMutation} = authApi;