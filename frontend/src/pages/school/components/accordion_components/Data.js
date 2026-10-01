import React from "react";
import Accordion from "./Accordion";
import EnterpreneurTable from "./EnterpreneurTable";
import CourseObjList from "./CourseObjList";
import CourseContentList from "./CourseContentList";

function Data() {
  return (
    <div className="mx-auto">
      <Accordion
        title="INTRODUCTION:"
        content="This entrepreneurship course teaches on a step-by step basis all that a potential operator of a cleaning company needs to know about starting, managing and growing of a cleaning company from a zero level.

        Those already operating in the industry and wish to grow their organizations to enviable positions are also encouraged to take the course.
        
        Participants will enjoy the benefit of developing a wide range of success skills in cleaning business and learning from the experience of well-trained experts in the industry."
        table={<EnterpreneurTable />}
      />

      <Accordion
        title="COURSE OBJECTIVES:"
        content={<CourseObjList/>}
      />

      <Accordion
        title="COURSE CONTENT:"
        content={<CourseContentList />}
      />
      <Accordion
        title="WHO SHOULD ATTEND?:"
        content="Managing Directors, General Managers, Entrepreneurs of Cleaning Companies."
      />
    </div>
  );
}

export default Data;
