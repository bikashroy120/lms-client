import CustomInput from "@/app/utils/CustomInput";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  courseContentData: any;
  setCourseContentData: (courseContentData: any[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseContent = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
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
                            updateData.slice(index, 1);
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
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default CourseContent;
