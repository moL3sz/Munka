import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos"
import "aos/dist/aos.css"




export const Team = () => {


    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (

        <div id="team" className="grid grid-cols-1 place-items-center">
            <div data-aos="fade-up" id="team-info" className="w-[250px] sm:w-[280px] md:w-[400px] m-12 grid grid-cols1-1 place-items-center text-white gap-y-12">

                <div className="text-3xl xl:text-5xl text-orange-500 bg-white w-full p-2 text-center">Csapatunk</div>
                <div className="m-2 text-lg text-justify xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit neque eveniet temporibus a officiis hic ut est, dolor, facilis nobis culpa, eius sequi molestias soluta! Accusamus maxime molestias et ea impedit consequuntur quo quod optio error fugiat! Consectetur, ea mollitia.</div>
                <div id="team-more" className="flex flex-row space-x-10 p-4 items-center xl:space-x-20">
                    <div className="text-xl xl:text-2xl m-2">Tudjon meg többet</div>
                    <FontAwesomeIcon id="team-arrow" icon={faLongArrowAltRight} className="text-4xl duration-300"/>
                </div>
            </div>


        </div>

    );
}