import React, { useState } from 'react'
import More1 from "../images/project5.jpg"
import More2 from "../images/project6.jpeg"
import More3 from "../images/project7.jpeg"
import More4 from "../images/project8.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

interface MoreProjectsProps {
    display: boolean
}


const images = [More1, More2, More3, More4]

export const MoreProjects: React.FC<MoreProjectsProps> = ({ display }: MoreProjectsProps) => {

    const [disp, setDisp] = useState(display)

    function ShowNoMore() {
        setDisp(!disp)
    }


    if (display && disp) {
        return (
            <div className="grid grid-cols-1 m-6">
                <div id="all-images" className="mt-[10vh] grid grid-cols-1 gap-y-10 place-items-center md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4">
                    {images.map(img => <img src={img} className="shadow-none w-[250px] h-[180px] lg:w-[300px] lg:h-[250px] 2xl:w-[380px] 2xl:h-[280px] md:w-[290px] md:h-[230px] xl:w-[320px] xl:h-[270px] duration-300" />)}
                </div>

            </div>
        );
    }
    return (
        <div></div>
    )

}


