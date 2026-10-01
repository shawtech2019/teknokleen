import { unleash } from "../../../constants/hygiene_images";


function UnleashSection() {
    const unleashHeadStyle = {
        color : '#00A5E2',
        fontSize : '45px',
        fontWeight : '700',
        fontFamily : 'poppins'
      }
    return (


    <section className="font-[poppins] lg:mx-[4rem] mx-[2rem] lg:flex items-center"
    > 
      <section className="md:mt-40 w-full mt-40">
        <div className="mb-[100px]">
          <h3 className="text-[26px] text-center lg:text-start font-[700] text-[#23146D]"> Unleash the Brilliance of Our Cleaning Services</h3>
          <p className="max-w-[750px] text-center lg:text-start font-[poppins] font-[400] text-[18px] text-[#4F4F4F]">We understand that cleanliness is more than just appearances—it's about creating a healthy and inviting atmosphere.</p>
        </div>

        <div className="grid w-full gap-3 grid-cols-2">
          <div>
            <img src={unleash} className="w-full max-h-[600px] object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-3">
              <div className="text-center h-[fit-content] lg:w-[40%] w-[95%]">
                <h3 style={unleashHeadStyle}>100%</h3>
                <div>
                  <strong>Unbeatable service</strong>
                  <p>We go above and beyond to exceed our clients expectations</p>
                </div>
              </div>

              <div className="flex-initial text-center h-[fit-content]  lg:w-[40%] w-[95%]">
              <h3 style={unleashHeadStyle}>30+%</h3>
                <div>
                  <strong>Years in Business</strong>
                  <p>We bring a wealth of knowledge and expertise to all projects</p>
                </div>
              </div>
            </div>
            <div className="h-[50px]" />
            <div className="flex-initial text-center w-[95%]">
            {/* <h3 style={unleashHeadStyle}>200k</h3> */}
              <div>
                <strong>trained Professional staff</strong>
                <p>We prioritize the professionalism and expertise of our staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    )
}


export default UnleashSection;