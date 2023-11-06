import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    token:"",
    user:"",
    code:""
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration:(state,action)=>{
            state.token = action.payload.token;
            state.code=action.payload.code;
        },
        userLoggedIn:(state,action)=>{
            state.token=action.payload.accessToken;
            state.user=action.payload.user;
        },
        userLoggedOut:(state)=>{
            state.token="";
            state.user=""; 
        }
    }
})

export const {userRegistration,userLoggedOut,userLoggedIn} = authSlice.actions;

export default authSlice.reducer