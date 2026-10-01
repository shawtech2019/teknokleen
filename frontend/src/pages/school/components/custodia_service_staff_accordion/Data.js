import Accordion from "./Accordion";
import Custodia_staff_objList from "./Custodia_staff_objList";
import Custodia_staff_table from "./Custodia_staff_table";

const Data = () => {
    return (
      <div className="mx-auto">
        <Accordion
          title="INTRODUCTION:"
          content="This course is designed to give the service staff the elementary knowledge and skill required for professional cleaning. The course teaches cleaning and maintenance, equipment, tools, accessories and products used for cleaning as well as procedure and techniques for cleaning. This course will give the service staff a solid foundation in Professional Cleaning."
          table={<Custodia_staff_table/>}
        />
  
        <Accordion title="COURSE OBJECTIVES:" content={<Custodia_staff_objList />} />
      </div>
    );
  };
  
  export default Data;
  