import React from "react";
import Accordion from "./Accordion";
import CustodiaTable from "./CustodiaTable";
import CustodiaObjList from "./CustodiaObjList";


const Data = () => {
  return (
    <div className="mx-auto">
      <Accordion
        title="INTRODUCTION:"
        content="This course addresses the custodial and maintenance functions of a supervisor in the hygiene industry. Apart from the required technical skills expected of a cleaning supervisor, he should know how to achieve results through others. This is the major difference between this course and custodial maintenance course for service staff"
        table={<CustodiaTable/>}
      />

      <Accordion title="COURSE OBJECTIVES:" content={<CustodiaObjList />} />
    </div>
  );
};

export default Data;
