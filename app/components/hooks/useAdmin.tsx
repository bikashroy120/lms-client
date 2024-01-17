"use client"

import { useSelector } from 'react-redux'

const useAdmin = () => {
    const {user} = useSelector((state:any)=>state.auth)
    if(user?.role==="admin"){
        return true
    }else{
        return false
    }
}

export default useAdmin