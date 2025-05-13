import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import getMyCourses from "../../core/services/api/panel.mycourses";
import { useState } from "react";
import { useEffect } from "react";
import CourseInfoHandler from "./courseinfoHandler";
import SearchBar from "../common/SearchBar";
import "./CoursesResponsive.css";

const Courses = () => {
  const [Query, setQuery] = useState("");
  const [flag, setFlag] = useState(false);
  const [CourseList, setCourseList] = useState([]);
 

  // const handleFlag = () => {
  //   setFlag(!flag);
  // };

  // const deleteFilter = () => {
  //   if (isFiltered && originalList.length) {
  //     setCourseList(originalList);
  //     setIsFiltered(false);
  //   }
  // };

  // const complete = () => {
  //   setCompleted((prevState) => !prevState);

  //   if (!Completed) {
  //     setOriginalList(CourseList);
  //     const check = CourseList.filter(
  //       (course) => course.statusName === "منقضی شده"
  //     );
  //     setCourseList(check);
  //     setIsFiltered(true);
  //   } else {
  //     setCourseList(originalList);
  //   }
  // };

  // const filterByTechnology = (tech) => {
  //   setOriginalList(CourseList);
  //   const check = CourseList.filter((course) =>
  //     course.technologyList.includes(tech)
  //   );
  //   setCourseList(check);
  //   setIsFiltered(true);
  // };

  // const abcd = (level) => {
  //   setOriginalList(CourseList);
  //   const check = CourseList.filter((course) => course.levelName === level);
  //   setCourseList(check);
  //   setIsFiltered(true);
  // };

  // const showPrice = () => {
  //   if (!originalList.length) {
  //     setOriginalList(CourseList);
  //   }
  //   if (Price === "150000000") {
  //     setCourseList(originalList);
  //   } else {
  //     const priceChecker = originalList.filter((course) => course.cost < Price);
  //     setCourseList(priceChecker);
  //     setIsFiltered(true);
  //   }
  // };

  const getList = async () => {
    const course = await getMyCourses();
    setCourseList(course);
  };

  useEffect(() => {
    getList();
  }, []);

  return <CourseInfoHandler CourseList={CourseList}/>;
};

export default Courses;
