"use client"

import React,{useState,useRef, useEffect} from 'react'
import { styles } from '../styles/style';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { useActivationMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';
import ResentOtp from './ResentOtp';

type Props = {
  setRoute:(route:string)=>void
}

type VerifyNumber = {
  "0":string;
  "1":string;
  "2":string;
  "3":string;
}

const Verification = ({setRoute}: Props) => {

  const [invalidError , setInvalidError] = useState<boolean>(false)
  const {token,code,reSent} = useSelector((state:any)=>state.auth)
  const [activation,{isSuccess,data,error,isLoading}] = useActivationMutation()


  console.log(reSent)

  useEffect(()=>{
    if(isSuccess){
      const message = data?.message || "Register success"
      toast.success(message)
      setRoute("Login")
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message)
      }else{
        console.log(error)
      }
    }
  },[isSuccess,error])

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ]
  const [verifyNumber,setVerifyNumber]=useState<VerifyNumber>({
    0:"",
    1:"",
    2:"",
    3:"",
  })

  const verificationHandler = async()=>{

    const verifyNumberData = Object.values(verifyNumber).join("")
    if(verifyNumberData.length !== 4){
      setInvalidError(true)
    }
    await activation({
      token, 
      activitonnCode:verifyNumberData
    })

  }

  const handelInputChange = (index:number,value:string)=>{
    setInvalidError(false)
    const newVerifyNumber = {...verifyNumber,[index]:value}
    setVerifyNumber(newVerifyNumber)

    if(value === "" && index > 0){
      inputRefs[index-1].current?.focus();
    }else if(value.length === 1 && index < 3){
      inputRefs[index+1].current?.focus();
    }
  }


  return (
    <div className=' w-full px-3'>
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <p className=" text-center">OTP : {code}</p>
      <br />
      <div className=' w-full flex items-center justify-center'>
          <div className=' w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center'>
            <Icon icon="uil:comment-verify" className='text-[30px] text-white'/>
          </div>
      </div>
      <br />
      <br />
      <div className='m-auto flex items-center justify-around'>
          {
            Object.keys(verifyNumber).map((key,index)=>(
              <input
              key={key}
              type='number'
              ref={inputRefs[index]}
              className={` w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white text-[18px] justify-center outline-none font-Poppins text-center ${
                invalidError ? "shake border-red-500" : " dark:border-white border-[#0000004a]"
              }`}
              placeholder=''
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e)=>handelInputChange(index,e.target.value)}
              />
            ))
          }
      </div>
      <ResentOtp />
      <button onClick={verificationHandler} className=" w-full py-3 text-white rounded-full mt-5 font-Poppins font-semibold text-[17px] bg-[#39c1f3] ">Verify OTP</button> 
      <div className=" flex items-center justify-center gap-2 py-3">
            <span className={`${styles.label} `}>Go back to sign in </span> <button onClick={()=>setRoute("sign-up")} className=" text-blue-500">Sign up </button> 
        </div>
    </div>
  )
}

export default Verification