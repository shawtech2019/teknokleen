import ServiceForm from "../../../components/ServicesForm";


function OneOffCleaningModal() {
  return (
    <div className="font-[poppins]">
      <h3 className="text-center text-[#23146D] text-[45px] font-[700]">
        One-Off Cleaning
      </h3>
      <div className="p-3 text-[#4F4F4F] text-[16px]">
        <p>
          Have you ever thought your home to be a little tired and in need of a
          clean-up? Ever dreamed of it looking the same as five or ten years
          ago, without years of stains, marks and dirt affecting the appeal? If
          so, then the one-off cleaning service is for you.
        </p>
        <br />
        <p>
          {" "}
          We have a great deal of experience in a very specialist field, and as
          a team, we carry out reactive cleaning.
        </p>
        <br />
        <p>
          Our professional one off cleaning team is made up of skilled
          professional cleaners, and all of our employees have carried out hours
          of extensive training, with years of experience in the professional
          cleaning industry. As such, our team demand and use the very best
          cleaning machines and equipment, and we can highly recommend one off
          cleaning to tenants, homeowners and landlords who want their home to
          undergo a thorough one off clean.
        </p>
        <br />
        <p>
          As part of our dedication to getting your property pristine clean, we
          would expect to send two or three cleaners to the average two-bedroom
          flat, and they would carry out between 16 to 20 hours’ worth of work
          to get your property as clean as possible.
        </p>
        <br />
        <p>
          What’s more, whether you want just one room or your full property
          cleaned, we will offer a bespoke quote and endeavour to provide a
          top-quality service. Some of the occasions to consider a one off clean
          include;
        </p>
      </div>
      <div className="p-3 text-[#4F4F4F] text-[16px]">
        <ul style={{ listStyleType: "romans", paddingInlineStart: 0 }}>
          <li>Before new tenants move into a property</li>

          <li>Before moving into your new home</li>

          <li>After building work has been completed.</li>
        </ul>
      </div>
      <div>
      <h2 className="text-center text-[#23146D] font-bold lg:text-7xl md:text-4xl text-2xl leading-[106.3%] font-gentium-book-basic py-4">Tell us how we can help you</h2>
        <ServiceForm />
      </div>
    </div>
  );
}

export default OneOffCleaningModal;
