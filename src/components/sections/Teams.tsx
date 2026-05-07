import Slider from "react-slick";
import "slick-carousel/slick/slick.js";


export default function Teams() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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

    return <section className="px-3 py-16 lg:p-10 m-auto">
        <div className="text-center text-[#24324d]">
            <h2 className="font-bold text-2xl">NOTRE EQUIPE</h2>
            <div className="flex justify-center items-center">
                <div className="border border-[#24324d] w-20 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-[#24324d] w-20 h-0"></div>
            </div>
        </div><br/><br/>
        <Slider {...settings} className="w-11/12 m-auto">
            <aside className="text-center">
                <img src="/public/images/teams/member-1.JPG" alt="ORE Gauthier" className="w-40 h-40 m-auto rounded-full block"/>
                <h3>ORE Gauthier</h3>
                <p className="font-semibold">COORDINATEUR GENERAL</p>
            </aside>
            <aside className="text-center">
                <img src="/public/images/teams/member-2.jpg" alt="Yoan Melson DANSOU" className="w-40 h-40 m-auto rounded-full block"/>
                <h3>Yoan Melson DANSOU</h3>
                <p className="font-semibold">PROMOTEUR</p>
            </aside>
            <aside className="text-center">
                <img src="/public/images/teams/member-3.JPG" alt="Junior KOUKPAKI" className="w-40 h-40 m-auto rounded-full block"/>
                <h3>Junior KOUKPAKI</h3>
                <p className="font-semibold">RD GRAPHISME</p>
            </aside>
            <aside className="text-center">
                <img src="/public/images/teams/member-4.JPG" alt="Géraud CODJIA" className="w-40 h-40 m-auto border rounded-full block"/>
                <h3>Géraud CODJIA</h3>
                <p className="font-semibold">RD SERIGRAPHIE</p>
            </aside>
            <aside className="text-center">
                <img src="/public/images/teams/member-5.JPG" alt="Hermann HOUNNOUVI" className="w-40 h-40 m-auto rounded-full block"/>
                <h3>Hermann HOUNNOUVI</h3>
                <p className="font-semibold">RD DEVELOPPEMENT WEB</p>
            </aside>
            <aside className="text-center">
                <img src="/public/images/teams/member-6.JPG" alt="François SAKITI" className="w-40 h-40 m-auto rounded-full block"/>
                <h3>François SAKITI</h3>
                <p className="font-semibold">RD INITIATION INFORMATIQUE</p>
            </aside>
        </Slider>
    </section>
}