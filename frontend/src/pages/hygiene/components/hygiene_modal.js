import { Link } from "react-router-dom";
import FooterSection from "../../home/components/FooterSection";
import OneOffCleaningModal from "../modal/one_off_cleaning";
import PeriodicCleaningModal from "../modal/periodic";
import PestModal from "../modal/pest";

function HygieneModal({ onClose, id }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-[2323232323] overflow-scroll">
      <div className="h-[80vh] bg-[#00000080]"></div>
      <div className="w-full top-[70vh] absolute min-h-[100vh]">
        <div className="relative">
          <div className="container mx-auto relative">
            <div className="bg-white p-[40px]  rounded-t-[45px] shadow min-[80vh]">
              <div className="mb-3">
                <Link
                  className="text-blue font-bold text-[14px]"
                  href="#?"
                  onClick={() => onClose()}
                >
                  go back
                </Link>
              </div>
              {id === "pest-control" && <PestModal />}
              {id === "one-off-cleaning" && <OneOffCleaningModal />}
              {id === "periodic-cleaning" && <PeriodicCleaningModal />}
            </div>
          </div>
          <div className="w-full bg-white z-[-3] top-[10vh] absolute min-h-[100vh]"></div>
        </div>
        <div className="bg-white ">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default HygieneModal;
