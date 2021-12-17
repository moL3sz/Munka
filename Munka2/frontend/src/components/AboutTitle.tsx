import React, { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { displayPartsToString } from "typescript"




export const AboutTitle = ()=>{


    useEffect(()=>{
        Aos.init({duration:2000})
    })

    return(
        <div id="about" data-aos="fade-up" className="mt-[10vh] mx-auto  text-center w-[180px] text-5xl text-orange-600">
            Rólunk
        </div>
    );
}