import Image from 'next/image'
import Container from '../../utils/Container'
import React from 'react'
import CustomButton from '../ui/CustomButton'

type Props = {}

const Knowledge = (props: Props) => {
  return (
    <div className=' bg-white lg:py-[100px] py-5'>
        <Container>
            <div className=' flex items-center justify-between flex-col lg:flex-row gap-7'>
                <div className=' w-full'>
                    <Image src={"/image/share.png"} width={500}  height={500} alt='share' className=' w-full h-full' />
                </div>
                <div className=' w-full'>
                    <h3 className=" text-[25px] lg:text-[35px] py-2 font-bold text-text">Want to share your knowledge? Join us a Mentor</h3>
                    <p className=' py-6 text-[18px] font-normal text-lightText'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                    <div className=' pb-7'>
                        <h2 className=' text-text font-medium text-[20px]'>Best Courses</h2>
                        <h2 className=' text-text font-medium text-[20px] pt-3'>Top rated Instructors</h2>
                    </div>
                    <CustomButton title='Read More' />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Knowledge