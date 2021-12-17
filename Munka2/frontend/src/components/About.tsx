import React, { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'


export const About = () =>{


    useEffect(()=>{
        Aos.init({ duration:2000 })
    },[]);

    return(
        <div className="grid grid-cols-1 mt-[10vh] m-12 gap-x-20 gap-y-20 place-items-center lg:grid-cols-2 xl:grid-cols-3">


            <div id="about-item" data-aos="fade-up">
                <div  className="bg-orange-500 text-white text-2xl w-[200px] px-4 py-6 translate-y-[10px] text-center md:text-3xl md:translate-x-[-40px] md:text-left">Mit csinálunk?</div>
                <div className="text-justify text-md w-[200px] md:w-[300px] bg-slate-200 p-6 md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt veniam quidem repellendus ratione esse in alias soluta. Rerum laudantium modi voluptatum doloribus, labore recusandae, cum quos nulla corporis nam commodi consectetur temporibus consequuntur aliquid repellat ullam, dicta quis provident!
                </div>
            </div>

            <div id="about-item"  data-aos="fade-up">
                <div  className="bg-orange-500 text-white text-2xl w-[200px] px-4 py-2 
                text-center md:text-3xl md:py-6 md:translate-x-[-40px] md:text-left md:translate-y-[10px]">Hogyan működünk?</div>
                <div className="text-justify text-md w-[200px] md:w-[300px] bg-slate-200 p-6 md:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium reprehenderit, debitis porro iure, ab alias quisquam hic minus aliquid odio adipisci cupiditate eaque distinctio aperiam molestias at nobis temporibus, numquam vero laudantium. Sit, reprehenderit. Nemo rerum reprehenderit laudantium modi.
                </div>
            </div>

            <div id="about-item"  data-aos="fade-up">
                <div  className="bg-orange-500 text-white text-2xl w-[200px] px-4 py-2 translate-y-[10px] text-center md:text-3xl md:text-left md:py-6 md:translate-x-[-40px]">Cégünk története</div>
                <div className="text-justify text-md w-[200px] md:w-[300px]  bg-slate-200 p-6 md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea totam eligendi nobis iusto distinctio autem! Quaerat, voluptas! Perspiciatis tempore officiis, enim id quisquam voluptatibus officia voluptas! Hic repudiandae a temporibus? Aperiam numquam sint incidunt error, esse ratione soluta voluptate?
                </div>
            </div>

        </div>
    );
}