import { unleash } from "../../../constants/hygiene_images";
import { elevate1, elevate2, elevate3 } from "../../../constants/school_images";

function ElevateSchool() {
  const unleashHeadStyle = {
    color: "#00A5E2",
    fontSize: "45px",
    fontWeight: "700",
    fontFamily: "poppins",
  };
  return (
    <section className="font-[poppins] lg:mx-[4rem] mx-[2rem] lg:flex items-center">
      <section className="md:mt-20 w-full mt-20">
        <div className="grid order-2 w-full gap-3 lg:grid-cols-2 grid-cols-1">
          <div className="relative mb-[100px] max-h-[500px]">
            <img
              src={elevate2}
              className="max-w-[150px] md:max-w-[150px] lg:max-w-[100%] absolute right-0"
            />
            <img src={elevate3} className="absolute bottom-[-50px]  right-0" />
            <img
              src={elevate1}
              className="w-[80%] max-h-[500px] object-cover object-top"
            />
          </div>
          <div className="flex p-3 flex-col justify-center items-center gap-4">
            <h1 className="lg:text-[54px] md:text-[48px] text-[32px] leading-tight text-[#23146D] font-['gentium'] font-[700] leading">
              Elevate Your Skills and Be Empower{" "}
            </h1>
            <p className="font-[16px] text-[#0D1111]">
              Get in-depth practical knowledge in the cleaning business! This
              will help you improve your productivity and bring you faster, more
              efficient solutions with better results.Get immediate results by
              learning from a professional cleaning academy. Classes with us
              will include the business side of cleaning, such as Customer
              Service, expectations from Employers and Customers.Being prepared
              for a career in cleaning goes beyond learning how to clean.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ElevateSchool;
