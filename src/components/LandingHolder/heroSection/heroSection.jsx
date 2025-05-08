
import React, { useState } from "react";
import header from "../../../assets/img/headr-img.png";
import { Field, Form, Formik } from "formik";
import { getApi } from "../../../core/services/api";
import image from "../../../assets/img/educat.png";

const HeroSection = () => {
  const [searchBox, setSearchBox] = useState([]);
  // console.log(searchBox, "search");

  const searchBoxFn = async (value) => {
    const data = await getApi(
      `/Home/GetCoursesWithPagination?Query=${value.search}`
    );
    setSearchBox(data.courseFilterDtos);
  };
  return (
    <div className=" min-h-screen p-8 font-sans w-full h-auto: flex ">
      <img
        src={header}
        alt="image"
        className="block md:hidden lg:block w-[700px] h-[500px] relative top-[100px] right-[450px]"
      />
      <h3 className="font-semibold text-[37px] text-[rgb(35,73,107)] relative top-[150px] left-[600px]">
        دنبال چی میگردی؟
      </h3>
      {/* <h2 className="relative top-[450px] left-[690px] text-[#6b6b6b] text-[16px]">
        دیگه وقتشه یه تکونی به خودت بدی...
      </h2> */}
      <div>
        <Formik initialValues={{ search: "" }} onSubmit={searchBoxFn}>
          <Form>
            <Field
              type="search"
              name="search"
              placeholder="تو فقط اسم ببر..."
              className="absolute top-[340px] left-[920px] p-[20px] rounded-2xl w-[400px] border-[rgb(56,112,161)] border-[2px] bg-[#e9e9e9]"
            />
            <button
              type="submit"
              className="bg-[rgb(35,73,107)] size-12 relative left-[560px] top-[215px] rounded-xl bg-[url(./assets/img/search.png)] bg-[2px] bg-no-repeat "
            ></button>
            <div className="item z-[90000] bg-[#d0deee] rounded-[5px] w-[400px] h-auto absolute left-[920px] top-[410px]">
              {searchBox.length === 0
                ? ""
                : searchBox.map((item) => {
                      <div className=" border-[1px] z-[900000] border-[#b0bcca] rounded-lg w-[380px] h-[50px] m-auto">
                        <img
                          src={
                            item.tumbImageAddress === null
                              ? image
                              : item.tumbImageAddress
                          }
                          alt=""
                          className="border-[1px] border-[#b0bcca] rounded-lg relative m-1 size-10 right-[330px]"
                        /> 
                        <h2 className="border-[1px] border-[#b0bcca] rounded-lg relative w-[250px] h-[40px] bottom-[44px] mr-1">
                          {item.title}
                        </h2>
                      </div>
                    ;
                  }
                  )}
                </div>
          </Form>
        </Formik>
        {/* <input /> */}
      </div>

      <h2 className="absolute top-[420px] right-[350px] text-[34px] text-[#444] ">
        آکادمی سپهر
      </h2>
      <h3 className="absolute w-[390px] text-[17px] right-[350px] text-[#6b6b6b] top-[470px]">
        آکاپمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد نیزار
        برای طراحی وب رو هرچه سریعتر و با بهترین روش یاد بگیری
      </h3>
    </div>
  );
};

export default HeroSection;
