import React, { useState } from 'react'
import Project1 from "../images/project1.jpg"
import Project2 from "../images/project2.jpeg"
import Project3 from "../images/project3.jpeg"
import Project4 from "../images/project4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { MoreProjects } from './MoreProjects'
import { isPropertySignature } from 'typescript'




export function Projects() {


    const [display, setDisplay] = useState(false)

    function ShowProjects(){
        setDisplay(!display)
        console.log(display)
        
    }

    return (
        <div id="projects" className="grid grid-cols-1 grid-rows-1">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-600 m-12 mx-auto lg:m-12 ">Projektjeink</div>


            <div className="m-6 grid grid-cols-1 place-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 mt-[10vh]">
                <img src={Project1} alt="" id="pp" className="w-[250px] h-[180px] lg:w-[300px] lg:h-[250px] 2xl:w-[380px] 2xl:h-[280px] md:w-[290px] md:h-[230px] xl:w-[320px] xl:h-[270px]" />
                <img src={Project2} alt="" id="pp" className="w-[250px] h-[180px] lg:w-[300px] lg:h-[250px] 2xl:w-[380px] 2xl:h-[280px] md:w-[290px] md:h-[230px] xl:w-[320px] xl:h-[270px]" />


                <img src={Project3} alt="" id="pp" className="w-[250px] h-[180px] lg:w-[300px] lg:h-[250px] 2xl:w-[380px] 2xl:h-[280px] md:w-[290px] md:h-[230px] xl:w-[320px] xl:h-[270px]" />
                <img src={Project4} alt="" id="pp" className="w-[250px] h-[180px] lg:w-[300px] lg:h-[250px] 2xl:w-[380px] 2xl:h-[280px] md:w-[290px] md:h-[230px] xl:w-[320px] xl:h-[270px]" />
            </div>

            {
                display ? <MoreProjects display={display}/> : ""
            }

            <div onClick={ShowProjects} id="more" className="flex flex-col items-center space-y-6 mt-[10vh] w-fit h-fit p-6 mx-auto animate-bounce ">
                <div id="all" className={`text-2xl lg:text-3xl text-slate-700 duration-300 ${display ? "order-1" : "order-0"} m-4`} >
                    {
                        display ? "Kevesebb" : "Összes"
                    }
                </div>
                <FontAwesomeIcon id="more-icon" icon={display ? faArrowUp: faArrowDown } className={`text-2xl lg:text-3xl text-slate-700 duration-300  ${display ? "order-0" : "order-0"}`  } />
            </div>

            
            

        </div>


    );
}