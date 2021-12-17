import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBuilding, faHeart, faPalette, faRuler } from "@fortawesome/free-solid-svg-icons";
import { WorkingTitle } from "./WorkingTitle";



export function Working() {


    return (

        <div id="working" className="m-14 mt-[10vh]">
            <WorkingTitle/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-x-60 gap-y-20 mx-auto mt-[20vh] place-items-center ">

                <div id="planning" className=" flex flex-col items-start space-y-4 p-2  duration-300 hover:bg-blue-300">
                    <FontAwesomeIcon id="p-i"icon={faRuler} className="text-5xl duration-300 text-blue-300" />
                    <div id="p-title" className="text-3xl">Tervezés</div>
                    <div id="p-w" className="w-[200px] md:w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe facilis, exercitationem sequi veniam voluptatem?</div>
                </div>

                <div id="design" className="flex flex-col items-start space-y-4 p-2 duration-300 hover:bg-blue-400">
                    <FontAwesomeIcon id="d-i" icon={faPalette} className="text-5xl text-blue-400" />
                    <div id="d-title" className="text-3xl">Design</div>
                    <div id="d-w" className="w-[200px] md:w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus soluta voluptas reprehenderit id dolorum! Quis inventore odit non laudantium?</div>
                </div>

                <div id="building" className="flex flex-col items-start space-y-4 p-2 duration-300 hover:bg-blue-600">
                    <FontAwesomeIcon id="b-i"icon={faBuilding} className="text-5xl text-blue-600" />
                    <div id="b-title" className="text-3xl lg:w-[300px]">Megvalósítás</div>
                    <div id="b-w"className="w-[200px] md:w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, adipisci in voluptas repellendus molestiae rerum minus aperiam impedit quos sequi.</div>
                </div>

                <div id="finish" className="flex flex-col items-start space-y-4 p-2 duration-300 hover:bg-blue-800">
                    <FontAwesomeIcon id="f-i" icon={faHeart} className="text-5xl text-blue-800" />
                    <div id="f-title" className="text-3xl">Siker</div>
                    <div id="f-w" className="w-[200px] md:w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam optio fugiat eligendi, tenetur reiciendis esse architecto autem ad. Provident!</div>
                </div>
            </div>
        </div>
    );
}