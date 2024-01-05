import { Rate } from 'antd'
import Image from 'next/image'
import React from 'react'

// type Props = {
//     data:any
// }

const Review = () => {

    const data = [
        {
            name: "Jessica James",
            image: "/image/rate1.jpg",
            job: "Student | Northeastern University,USA",
            rating: 5,
            comment:
              "I had the pleasure of exploring Becodemy, a website that provides an extensive range of courses on various tech-related topics. I was thoroughly impressed with my experience, as the website offers a comprehensive selection of courses that cater to different skill levels and interests. If you're looking to enhance your knowledge and skills in the tech industry, I highly recommend checking out Becodemy!",
          },
      
          {
            name: "Ayat AlBqoor",
            image: "/image/rate3.jpg",
            job: "Web developer | Nafith Logistics International,Jordan",
            rating: 5,
            comment:
              "Thanks for your amazing programming tutorial channel! Your teaching style is outstanding, and the quality of your tutorials is top-notch. Your ability to break down complex topics into manageable parts, and cover diverse programming languages and topics is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!",
          },
          {
            name: "Imen Lakrib",
            image: "/image/rate5.jpg",
            job: "Full stack web developer | Algeria",
            rating: 5,
            comment:
              "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
          },
    ]


  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
        <h2 className=' text-text text-[23px] font-semibold'>Reviews</h2>
        <div className=" flex flex-col items-center gap-5 mt-5">
                {data?.map((item:any, index:number) => (
                  <div
                    key={index}
                    className=" w-full bg-white shadow-sm rounded-xl border border-gray-300 p-5"
                  >
                    <div>
                      <div className=" flex items-start flex-col gap-3 md:flex-row justify-between">
                        <div className=" flex items-center gap-2 w-[70%]">
                          <div className="w-[50px] h-[50px] border overflow-hidden rounded-full">
                            <Image
                              src={item?.image}
                              width={100}
                              height={100}
                              alt="logo"
                              className=" w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[70%]">
                            <h2 className=" text-[17px] font-semibold">
                              {item.name}
                            </h2>
                            <p className=" text-[14px] font-semibold text-lightText ">
                              10 months ago
                            </p>
                          </div>
                        </div>
                        <Rate disabled defaultValue={item.rating} />
                      </div>
                      <p className="mt-3 text-base font-medium text-lightText">
                        {item.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Review