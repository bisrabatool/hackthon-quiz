import React from "react";
import Title from "../components/layout/CourseTitle";
import CourseCard from ".//CourseCard";
import { CourseData } from "../data/CourseData";
const CourseModule = () => {
  return (
    <section
      id="course"
      className="w-full py-20 border-b-[1px] border-b-lightblue"
    >
      <Title title="Courses We Offer:)" des="Course Module" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {CourseData.map((item) => (
          <CourseCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CourseModule;