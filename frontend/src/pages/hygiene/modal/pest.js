import ServiceForm from "../../../components/ServicesForm";
import { pestCards } from "../../../data/what_we_do";

function PestModal() {
  return (
    <div className="font-[poppins]">
      <h3 className="text-center text-[#23146D] text-[45px] font-[700]">
        Pest Control
      </h3>
      <div className="p-3 text-[#4F4F4F] text-center text-[16px]">
        <p>
          The perfect selection of solutions to deal with rodent, reptile, insect or
          bird infestation. We will rapidly get rid of the pests that plague
          your home or business premises. In four steps, we carry out a
          custom-tailored pest control session to fit your specific needs:
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        {pestCards.map((item, i) => (
          <div key={i} className="p-3 relative ">
            <div className="min-w-[40px] flex items-center justify-center absolute right-[5px] top-[10px] w-[40px] bg-[#010D82] text-white rounded-[100%] text-[12px] h-[40px] min-h-[40px]">
              0{i + 1}
            </div>
            <div className="shadow-md min-h-[250px]  rounded bg-white p-3 text-[#4F4F4F] text-[16px]">
              <h3 className="text-[#010D82] font-[600] text-[18px]">
                {item.title}
              </h3>
              <div className="mt-4">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     <div>
     <h2 className="text-center text-[#23146D] font-bold lg:text-7xl md:text-4xl text-2xl leading-[106.3%] font-gentium-book-basic py-4">Tell us how we can help you</h2>
     <ServiceForm />
     </div>
    </div>
  );
}

export default PestModal;