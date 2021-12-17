import { faAcquisitionsIncorporated } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react"
import project1 from "../images/project1.jpg"
import project2 from "../images/project2.jpg"
import project3 from "../images/project3.jpg"
import project4 from "../images/project4.jpg"
import Aos from "aos"
import "aos/dist/aos.css"


const bgColors = [
    "bg-slate-100",
    "bg-slate-200",
    "bg-skate-300",
    "bg-slate-400",
    "bg-slate-500",
    "bg-slate-600",
    "bg-slate-700",
    "bg-slate-800",
    "bg-slate-900"
]

const bgColors2 = [

    
    "bg-orange-900",
    "bg-orange-800",
    "bg-orange-700",
    "bg-orange-600",
    "bg-orange-500",
    "bg-orange-400",
    "bg-orange-300",


]



export const Projects = () => {


    const [background, setBackground] = useState(0)

    const [background2,setBackground2] = useState(0)

    useEffect(()=>{
        const interval =setInterval(()=>{
            setBackground((bg) =>(bg===9 ? 0 : bg+1));
            setBackground2((bg)=>(bg===7 ? 0 : bg+1));
        },10000)
    },[]);

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    



    return (

        <div id="projects" className={`p-8 mt-[20vh] grid grid-cols-1 gap-y-20 lg:grid-cols-2 place-items-center ${bgColors[background]} `}>

            <div data-aos="fade-right">
                <img src={project1} className="xl:w-[550px] xl:h-[350px] lg:w-[430px] lg:h-[290px]" />

                <div id="p-info" className={`grid grid-cols-2 place-items-center ${bgColors2[background2]} text-white xl:translate-x-[330px] xl:translate-y-[-40px] text-lg sm:text-xl sm:w-[260px] sm:translate-x-[460px] sm:translate-y-[-40px] xl:w-[250px]  lg:translate-x-[200px] xl:text-2xl `}>
                    <div className="p-2 gap-y-2">
                        <div>Budapest</div>
                        <div>2020.06.12</div>
                    </div>
                    <FontAwesomeIcon icon={faLongArrowAltRight} id="p-icon" className="xl:text-5xl" />

                </div>
            </div>

            <div data-aos="fade-left">
                <img src={project2} className="xl:w-[550px] xl:h-[350px] lg:w-[430px] lg:h-[290px]" />

                <div   id="p-info" className={`grid grid-cols-2 place-items-center ${bgColors2[background2]} text-white  xl:translate-x-[330px] xl:translate-y-[-40px] text-lg sm:text-xl sm:w-[260px] sm:translate-x-[460px] sm:translate-y-[-40px] lg:translate-x-[200px] xl:w-[250px] xl:text-2xl`}>
                    <div className="p-2 gap-y-2">
                        <div>Gödöllő</div>
                        <div>2014.03.19</div>
                    </div>
                    <FontAwesomeIcon icon={faLongArrowAltRight} id="p-icon" className="xl:text-5xl"/>

                </div>
            </div>

            <div data-aos="fade-up">
                <img src={project3} className="xl:w-[550px] xl:h-[350px] lg:w-[430px] lg:h-[290px]" />

                <div  id="p-info" className={`grid grid-cols-2 place-items-center ${bgColors2[background2]} text-white  xl:translate-x-[330px] xl:translate-y-[-40px] text-lg sm:text-xl sm:w-[260px] sm:translate-x-[460px] sm:translate-y-[-40px] lg:translate-x-[200px] xl:w-[250px] xl:text-2xl`}>
                    <div className="p-2 gap-y-2">
                        <div>Budapest</div>
                        <div>2021.08.23</div>
                    </div>
                    <FontAwesomeIcon icon={faLongArrowAltRight} id="p-icon" className="xl:text-5xl"/>

                </div>
            </div>

            <div data-aos="fade-up">
                <img src={project4} className="xl:w-[550px] xl:h-[350px] lg:w-[430px] lg:h-[290px]" />

                <div  id="p-info" className={`grid grid-cols-2 place-items-center ${bgColors2[background2]} text-white  xl:translate-x-[330px] xl:translate-y-[-40px] text-lg sm:text-xl sm:w-[260px] sm:translate-x-[460px] sm:translate-y-[-40px] lg:translate-x-[200px] xl:w-[250px] xl:text-2xl`}>
                    <div className="p-2 gap-y-2">
                        <div>Győr</div>
                        <div>2017.01.04</div>
                    </div>
                    <FontAwesomeIcon icon={faLongArrowAltRight} id="p-icon" className="xl:text-5xl"/>

                </div>
            </div>
        </div>

    );
}