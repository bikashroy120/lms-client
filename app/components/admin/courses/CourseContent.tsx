import CustomInput from "@/app/utils/CustomInput";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidBank, BiSolidPencil } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  courseContentData: any;
  setCourseContentData: (courseContentData: any[]) => void;
  active: number;
  setActive: (active: number) => void;
  handelSubmit:any
};

const CourseContent = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
  handelSubmit,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );
  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleCollapseToggle = (index: number) => {
    const updateCollapsed = [...isCollapsed];
    updateCollapsed[index] = !updateCollapsed[index];
    setIsCollapsed(updateCollapsed);
  };

  const handleRemoveLink = (index: number, LinkIndex: number) => {
    const updateData = [...courseContentData];
    updateData[index].links.splice(LinkIndex, 1);
    setCourseContentData(updateData);
  };

  const handelAddLink = (index:number)=>{
    const updateData = [...courseContentData];
    updateData[index].links.push({title:"",url:""})
    setCourseContentData(updateData)
  } 

  const newContentHandler = (item:any)=>{
    if(item.title==="" || item.description==="" || item.videoUrl==="" || item.links[0].title==="" || item.links[0].url===""){
      toast.error("Please fill all the fields first!");
    }else{
      let newVideoSection = "";

      if(courseContentData.length > 0){
        const lastVideoSection = courseContentData[courseContentData.length - 1].videoSection;

        if(lastVideoSection){
          newVideoSection = lastVideoSection;
        }
      }
      const newContent = {
        videoUrl:"",
        videoSection:`${newVideoSection}`,
        title:"",
        description:"",
        links:[{title:"",url:""}]
      }
      setCourseContentData([...courseContentData,newContent])
    }
  }


  const addNewSection = ()=>{
    if(
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === "" 
    ){
      toast.error("Please fill all the fields first!");
    }else{
      setActiveSection(activeSection + 1)
      const newContent = {
        videoUrl:"",
        title:"",
        description:"",
        videoSection:`Untitled Section ${activeSection}`,
        links:[{title:"",url:""}]
      }
      setCourseContentData([...courseContentData,newContent])
    }
  }


  const handelOption = (e:any)=>{
    e.preventDefault()
    if(
      courseContentData[courseContentData.length - 1].title === "" ||
      courseContentData[courseContentData.length - 1].description === "" ||
      courseContentData[courseContentData.length - 1].videoUrl === "" ||
      courseContentData[courseContentData.length - 1].links[0].title === "" ||
      courseContentData[courseContentData.length - 1].links[0].url === "" 
    ){
      toast.error("Please fill the fields for go to next")
    }else{

      handelSubmit()
      setActive(active+1)
    }
  }

  const preButton = ()=>{
    setActive(active-1)
  }

  return (
    <div className="p-8">
      <h2 className=" text-3xl font-[500] pb-5">Course Content</h2>
      <div>
        <form onSubmit={handleSubmit}>
          {courseContentData?.map((item: any, index: number) => {
            const showSectionInput =
              index === 0 ||
              item.videoSection !== courseContentData[index - 1].videoSection;
            return (
              <>
                <div
                  className={`w-full bg-[#cdc8c817] p-4 ${
                    showSectionInput ? "mt-10" : "mb-0"
                  } `}
                >
                  {showSectionInput && (
                    <>
                      <div className=" flex w-full items-center">
                        <input
                          type="text"
                          className={` text-[20px] ${
                            item.videoSection === "Untitled Section"
                              ? "w-[170px]"
                              : " w-max"
                          } font-Poppins cursor-pointer text-black border-none outline-none`}
                          value={item.videoSection}
                          onChange={(e) => {
                            const updateData = [...courseContentData];
                            updateData[index].videoSection = e.target.value;
                            setCourseContentData(updateData);
                          }}
                        />
                        <BiSolidPencil className=" cursor-pointer text-dark" />
                      </div>
                      <br />
                    </>
                  )}

                  <div className=" flex w-full items-center justify-between my-0">
                    {isCollapsed[index] ? (
                      <>
                        {item.title ? (
                          <p className=" font-Poppins text-black">
                            {" "}
                            {index + 1} {item.title}
                          </p>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <div></div>
                    )}

                    {/* ====arrow button for collasped video ===== */}

                    <div className=" flex items-center">
                      <AiOutlineDelete
                        className={`text-[20px] mr-2 text-black ${
                          index > 0 ? " cursor-pointer " : " cursor-no-drop"
                        }`}
                        onClick={() => {
                          if (index > 0) {
                            const updateData = [...courseContentData];
                            updateData?.splice(index,1);
                            console.log(updateData);
                            setCourseContentData(updateData);
                          }
                        }}
                      />
                      <MdOutlineKeyboardArrowDown
                        fontSize="large"
                        className=" text-black"
                        style={{
                          transform: isCollapsed[index]
                            ? " rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                        onClick={() => handleCollapseToggle(index)}
                      />
                    </div>
                  </div>

                  {!isCollapsed[index] && (
                    <>
                      <div className="my-3">
                        <CustomInput
                          label="Video Title"
                          value={item.title}
                          onChange={(e: any) => {
                            const updateData = [...courseContentData];
                            updateData[index].title = e.target.value;
                            setCourseContentData(updateData);
                          }}
                        />
                        <CustomInput
                          label="Video Url"
                          value={item.videoUrl}
                          onChange={(e: any) => {
                            const updateData = [...courseContentData];
                            updateData[index].videoUrl = e.target.value;
                            setCourseContentData(updateData);
                          }}
                        />

                        <div className=" flex items-start flex-col gap-1 py-3">
                          <label
                            className=" text-black font-semibold text-sm"
                            htmlFor="name"
                          >
                            Description
                          </label>
                          <textarea
                            name=""
                            id=""
                            required
                            value={item.description}
                            onChange={(e: any) => {
                              const updateData = [...courseContentData];
                              updateData[index].description = e.target.value;
                              setCourseContentData(updateData);
                            }}
                            className=" w-full py-2 px-3 border bg-transparent  rounded-lg border-gray-400 h-[150px] focus:outline-blue-500"
                            placeholder="Enter description"
                          ></textarea>
                          <br />
                          <br />
                          <br />
                        </div>
                        {item.links.map((link: any, LinkIndex: number) => (
                          <div className=" mb-3 block">
                            <div className=" w-full flex items-center justify-between">
                              <label htmlFor="">Link {LinkIndex + 1}</label>
                              <AiOutlineDelete
                                onClick={() =>
                                  LinkIndex === 0
                                    ? null
                                    : handleRemoveLink(index, LinkIndex)
                                }
                                className={`${
                                  LinkIndex === 0
                                    ? " cursor-no-drop"
                                    : " cursor-pointer"
                                } text-black text-[20px]`}
                              />
                            </div>
                            <CustomInput
                              label="Link Title"
                              value={link.title}
                              onChange={(e: any) => {
                                const updateData = [...courseContentData];
                                updateData[index].links[LinkIndex].title = e.target.value;
                                setCourseContentData(updateData);
                              }}
                            />
                            <CustomInput
                              label="Link url"
                              type={"url"}
                              value={link.url}
                              onChange={(e: any) => {
                                const updateData = [...courseContentData];
                                updateData[index].links[LinkIndex].url = e.target.value;
                                setCourseContentData(updateData);
                              }}
                            />
                          </div>
                        ))}

                        <br />
                        <div className=" inline-block mb-4">
                            <p onClick={()=>handelAddLink(index)} className=" flex items-center text-[18px] text-black cursor-pointer">
                              <BiSolidBank className="mr-2"/> Add Link
                            </p>
                        </div>
                      </div>
                    </>
                  )}
                  <br />
                  {index === courseContentData.length - 1 && (
                    <div>
                        <p
                          className=" flex items-center text-[18px] text-black cursor-pointer"
                          onClick={()=>newContentHandler(item)}
                        >
                          <AiOutlinePlusCircle className= "mr-2"/> Add New Content
                        </p>
                    </div>
                  )}
                </div>
              </>
            );
          })}
          <br />
          <div onClick={()=>addNewSection()} className=" flex items-center text-[20px] text-black">
            <AiOutlinePlusCircle className= "mr-2"/> Add New Section
          </div>

          <div className=" flex items-center justify-between">
            <button type="button" onClick={()=>preButton()}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Prev</button>
            <button type="submit" onClick={handelOption}  className="w-[200px] py-2 bg-primary rounded-md text-white font-semibold text-xl">Next</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CourseContent;
