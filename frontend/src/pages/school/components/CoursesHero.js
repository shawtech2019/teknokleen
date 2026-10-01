function CoursesHero() {
  const bannerStyle = {
    background: "url('/course_hero.png')",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "overlay",
  };
  return (
    <div
      style={bannerStyle}
      className="course-hero h-[70vh] min-h-[300px] flex justify-center items-center"
    >
      <div className="container">
        <h3 className="text-center lg:text-[64px] md:text-[50px] text-[24px] text-[#FFFFFF]">
          Courses that will give you in-depth practical knowledge that you need
        </h3>
      </div>
    </div>
  );
}

export default CoursesHero;
