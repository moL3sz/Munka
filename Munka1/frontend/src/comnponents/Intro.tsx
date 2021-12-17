import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export function Intro(){

    return(
        <div className="grid grid-rows-1 mt-[14vh] sm:grid-cols-2 mx-16 place-items-center">
            <div className="flex flex-col justifiy-center items-center text-4xl text-blue-900 m-auto text-center lg:text-5xl xl:text-6xl p-2 ">
                Építsd meg álmaid házát
            </div>
            <div className="flex flex-col justify-around w-fit h-fit bg-slate-100 m-2">
                <div className="text-justify  w-[180px] sm:w-[210px] md:w-[300px] lg:w-[70%] xl:w-[80%] mr-[5vh] p-6 mx-auto sm:m-0 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ducimus, earum incidunt numquam officiis hic rerum expedita adipisci pariatur perferendis, ut corrupti? Corporis corrupti animi sed nostrum, nulla a dolor!
                </div>
                <div id="contact-link" className="p-1 border-2 border-solid border-blue-600 w-[100%] bg-white text-xl lg:text-2xl text-center hover:bg-blue-600 hover:text-white duration-300 mx-auto sm:m-0 sm:w-[400px] md:p-2 xl:p-4">
                    <a href="">Lépjen kapcsolatba velünk</a>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-4 duration-300" id="arrow"/>
                </div>
            </div>
        </div>
    );


}

