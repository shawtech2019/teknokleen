import ServiceForm from "../../../components/ServicesForm";


function PeriodicCleaningModal() {
  return (
    <div className="font-[poppins]">
      <h3 className="text-center text-[#23146D] text-[45px] font-[700]">
      Periodic office/Industrial cleaning
      </h3>
      <div className="p-3 text-[#4F4F4F] text-[16px]">
        <p>
          We pride ourselves on professionalism, reliability and value for
          money.
        </p>
        <br />

        <ul style={{ listStyleType: "romans", paddingInlineStart: 0 }}>
          <li>Before new tenants move into a property</li>

          <li>Before moving into your new home</li>

          <li>After building work has been completed.</li>
        </ul>
        <br />
        <p>
          We work with a diverse range of clients, cleaning everything from
          industrial premises to hospitality venues. As established commercial
          cleaners, we can offer you a full service. This includes carpets,
          upholstery, steam cleans, windows and shop fronts. Whatever your
          special requirements, just let us know.
        </p>
        <br />
        <b>Professional cleaners</b>
        <p>
          Our high-calibre cleaning operatives are trained to clean commercial
          premises and office equipment professionally. Our in-house program
          includes computer hardware cleaning, workplace hygiene and health and
          safety. So, you can relax – your business is in safe hands.
        </p>
        <br />
        <b> Reliable service</b>
        <p>
          A company needs to be able to rely on its cleaners, and we know that
          quality and continuity are important to you. Our aim is to build
          lasting business relationships with our clients by providing a
          consistently flawless service. To this end, you’ll find our staff
          exemplary and our customer service first-rate.
        </p>
        <br />
      </div>
      {/* <div className="p-3">
        
      </div> */}
      <div>
        <h2 className="text-center text-[#23146D] font-bold lg:text-7xl md:text-4xl text-2xl leading-[106.3%] font-gentium-book-basic py-4">Tell us how we can help you</h2>
        <ServiceForm />
      </div>
    </div>
  );
}

export default PeriodicCleaningModal;
