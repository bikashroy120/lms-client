import TopHeading from '../../utils/TopHeading'
import Container from '../../utils/Container'
import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className=" bg-white pt-5 lg:pt-0">
      <Container>
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className='w-full'>
            <TopHeading
              title="Master the skills to drive your career"
              topTitle="What’s New"
              sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet."
            />
            <p className='text-base font-medium text-lightText mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
            <p className='text-base font-medium text-lightText mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
            <p className='text-base font-medium text-lightText mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
          </div>
          <div className=" relative w-full lg:h-[650px] h-full flex items-center justify-center mt-5 lg:mt-0">
                <Image src={"/image/join.png"} width={1000} height={500} alt="master" className=" lg:absolute w-[600px] bottom-0 right-0"/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About