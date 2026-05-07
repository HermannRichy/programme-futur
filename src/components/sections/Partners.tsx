import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {

    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return <section className="p-5 lg:p-10 m-auto">
        <div className="text-center text-[#24324d]">
            <h2 className="font-bold text-2xl">NOS PARTENAIRES</h2>
            <div className="flex justify-center items-center">
                <div className="border border-[#24324d] w-20 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-[#24324d] w-20 h-0"></div>
            </div>
        </div><br/><br/>
        <Slider {...settings} className="w-11/12 m-auto">
            <aside className="">
                <img src="/images/logo-part/models-academy.jpg" alt="Models academy" className="w-40 h-40 m-auto rounded-full block"/>
            </aside>
            <aside className="">
                <img src="/images/logo-part/dds.jpg" alt="DDS" className="w-40 h-40 m-auto border border-gray-950 rounded-full block"/>
            </aside>
            <aside className="">
                <img src="/images/logo-part/E-ENTREPRISE.png" alt="E-ENTREPRISE" className="w-40 h-40 m-auto rounded-full block"/>
            </aside>
            <aside className="">
                <img src="/images/logo-part/digital-innovation.jpg" alt="Digital Innovation" className="w-40 h-40 m-auto rounded-full block"/>
            </aside>
        </Slider>
    </section>
}