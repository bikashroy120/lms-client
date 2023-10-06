import Link from 'next/link'
import React from 'react'

type Props = {
    activeItem: number,
    isMobile: boolean,
}


export const navsItemData = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Course",
        url: "/courde"
    },
    {
        name: "Policy",
        url: "/policy"
    },
    {
        name: "FAQ",
        url: "/faq"
    },
]

const NavItem = ({ activeItem, isMobile }: Props) => {
    return (
        <>
            <div className=' hidden 800px:flex'>
                {
                    navsItemData && navsItemData.map((i, index) => (
                        <Link href={`${i.url}`} key={index} passHref>
                            <span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400]`}>
                                {i.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            {
                isMobile && (
                    <div className=' 800px:hidden mt-5'>
                        <div className='w-full text-center py-6'>
                            {
                                navsItemData && navsItemData.map((i, index) => (
                                    <Link href={`${i.url}`} key={index} passHref>
                                        <span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400]`}>
                                            {i.name}
                                        </span>
                                    </Link>
                                ))
                            } F
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default NavItem