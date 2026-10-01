import Slider from "react-slick";
import { washableBrush } from "../../../constants/hygiene_shop_images";
import { useEffect, useState } from "react";
import { httpGetWithoutToken } from "../../../utils/http_util";
import { Link } from "react-router-dom";
function SlideProducts() {
  const [categories, setCategories] = useState([])
  const settings = {
    dots: true,
    navs: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      window.innerWidth > 920 ? 3 : window.innerHeight > 890 ? 2 : 1,
    slidesToScroll:
      window.innerWidth > 920 ? 3 : window.innerHeight > 890 ? 2 : 1,
  };
  useEffect(()=> {
    fetchConstants()
  }, [])
  const fetchConstants = async ()=> {
    const resp = await httpGetWithoutToken("shop/categories")
    if(resp.statusCode == 200){
      setCategories(resp.data)
    }
  }
  return (
    <div className="container mx-auto mt-[50px]">
      <div className="w-full overflow-hidden py-5">
        <Slider {...settings}>
          {categories.map((item, i) => (
            <Link  key={i} to={"/hygiene-shop/"+item.slug} className="p-3 ">
              <div
                style={{ border: "1px solid #6EC1E4" }}
                className="flex mx-auto max-w-[400px] items-center justify-between p-3 px-5 bg-white rounded-[15px]"
              >
                <img
                  src={item.image}
                  className="h-[94px] max-w-[240px] object-contain"
                />
                <div className="">
                  <h3 className="text-[#23146D] font-[poppins] text-[17px]">
                  {item.name}
                  </h3>
                  <p>({item.items} Items)</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideProducts;