"use client"

import React,{useState,useRef} from 'react'
import { styles } from '../styles/style';
import { Icon } from '@iconify/react';

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
    console.log("test")
    setInvalidError(true)
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
    <div>
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <br />
      <div className=' w-full flex items-center justify-center'>
          <div className=' w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center'>
            <Icon icon="uil:comment-verify" className='text-[30px]'/>
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
      <button onClick={verificationHandler} className=" w-full py-3 text-white rounded-full mt-5 font-Poppins font-semibold text-[17px] bg-[#39c1f3] ">Verify OTP</button> 
      <div className=" flex items-center justify-center gap-2 py-3">
            <span className={`${styles.label} `}>Go back to sign in </span> <button onClick={()=>setRoute("sign-up")} className=" text-blue-500">Sign up </button> 
        </div>
    </div>
  )
}

export default Verification