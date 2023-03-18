import { createSlice } from "@reduxjs/toolkit";

export const authenticateUserLoginSlice=createSlice({
    name:'userAuthentication',
    initialState:{value:[],},
    reducers:{
        authenticateUserLogin:(state,action)=>{
        state.value=[]; // get tokenId,Roles,Employee details from API Call
        }
    },
}) 


export const authenticateUserLoginAsync=(loginCredentials )=>(dispatch)=>{
setTimeout(()=>{
    dispatch(authenticateUserLogin(loginCredentials))
},1000)
}

export const {authenticateUserLogin}=authenticateUserLoginSlice.actions
export default authenticateUserLoginSlice.reducer