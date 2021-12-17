import React from 'react'
import trends from '../images/trends.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export const Trends = () =>{



    return(
        <div id="trends" className="mt-[10vh] grid grid-cols-1 gap-y-12 place-items-center">
            <div className="flex flex-col space-y-5 bg-white flex flex-col items-center opacity-95 ">
                <div className="text-xl text-slate-400 m-8 md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl ">Építeszet</div>
                <div className="text-4xl text-blue-400 lg:text-5xl xl:text-6xl 2xl:text-7xl">Trendek</div>
                <div className="2xl:w-[600px] 2xl:text-xl text-justify 2xl:p-20 w-[200px] p-2 text-sm md:text-lg md:w-[330px] lg:w-[380px] xl:w-[400px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis libero tenetur aperiam maiores, numquam quibusdam. Labore omnis minus quisquam velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur voluptatum atque omnis nihil, odio ipsa dolorum incidunt nostrum aliquid dolores cumque magni corporis id similique nemo nobis consequatur consectetur ullam asperiores. Excepturi autem harum iure, non quidem tempora? Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, inventore! Sunt, cupiditate. Praesentium iusto quidem nobis, neque consectetur libero nostrum hic vero dicta veniam quibusdam expedita nemo doloribus possimus voluptatem?</div>

                <div id="contact-link2" className="p-4 border-2 border-solid border-blue-600 w-[100%] bg-white text-xl lg:text-2xl text-center hover:bg-blue-600 hover:text-white duration-300 sm:w-[400px] lg:w-[600px]">
                    <a href="">Tudjon meg többet</a>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-4 duration-300" id="arrow"/>
                </div>
            </div>
        </div>

    );



}