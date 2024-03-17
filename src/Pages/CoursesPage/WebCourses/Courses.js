import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopularCourse from "../Components/PopularCourse";
import { getCourses } from "../../../store/actions/courseAction";
import TopBar from "../Components/TopBar";
const Courses = ({user}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCourses())
  } , [dispatch])
  const courses = useSelector((state) => state.courseReducer.courses);
  const webCourses = courses.filter(
    (course) => course.theme === "web development"
  );
  let content = webCourses.map((course, index) => (
      <PopularCourse
        image={course.image}
        price={course.price}
        creator={course.creator}
        rate={course.rate}
        title={course.title}
        delay={0.4 * (index + 1)}
        column="col-xl-6"
        user={user}
        id={course._id}
      />
  ));
  return (
    <div className="container-fluid px-5">
      <TopBar/>
      <div className="row">{content}</div>
    </div>
  );
};

export default Courses;