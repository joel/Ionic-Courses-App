import React, { useState } from "react";

import CoursesContext, { Course } from "./courses-context";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, SetCourses] = useState<Course[]>([]);

  const addCourse = () => {};
  const addGoal = () => {};
  const deleteGoal = () => {};
  const updateGoal = () => {};

  return (
    <CoursesContext.Provider
      value={{
        courses: courses,
        addCourse: addCourse,
        addGoal: addGoal,
        deleteGoal: deleteGoal,
        updateGoal: updateGoal,
      }}
    >
      {[props.children]}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
