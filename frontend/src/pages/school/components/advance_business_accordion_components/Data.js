import React from "react";
import Accordion from "./Accordion";
import AdvanceBusinessTable from "./AdvanceBusinessTable";
import AdvanceObjCourseList from "../accordion_components/AdvanceObjCourseList";

const Data = () => {
  return (
    <div className="mx-auto">
      <Accordion
        title="INTRODUCTION:"
        content="This course has been configured to enhance the knowledge and capacity of participants in specific areas of managerial responsibilities in accordance with your specific request to be educated in the following areas:"
        table={<AdvanceBusinessTable />}
      />

      <Accordion title="COURSE OBJECTIVES:" content={<AdvanceObjCourseList />} />
    </div>
  );
};

export default Data;
