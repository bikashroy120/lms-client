import React from 'react'
import { Drawer } from "antd";
import { useMediaQuery } from '@react-hook/media-query';
import { MdClose } from 'react-icons/md';

type Props = {
    children:React.ReactNode;
    open:boolean;
    setOpen:(open:boolean)=>void;
    title:string
}

const CustomDrawer = ({children,open,setOpen,title}: Props) => {
    const onClose = () => {
        setOpen(false);
      };
      const isSmallScreen = useMediaQuery('(max-width: 767px)');
  return (
    <Drawer
    placement={"right"}
    closable={false}
    onClose={onClose}
    open={open}
    width={isSmallScreen ? "100%" : "800px"}
  >

    <div className='lg:px-5'>
        <div className=' flex items-center justify-between'>
        <h2 className=" font-semibold text-[25px]">{title}</h2>
            <button onClick={onClose} className='py-2 px-2 bg-red-500 text-white  hover:bg-red-700 rounded-xl'><MdClose size={20}/></button>
        </div>
        <div className='my-5 w-full h-[1px] bg-gray-200'></div>
        {children}
    </div>
  </Drawer>
  )
}

export default CustomDrawer