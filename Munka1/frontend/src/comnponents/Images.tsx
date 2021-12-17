import React, { useState } from 'react'
import House1 from '../images/house1.jpg'
import House2 from '../images/house2.jpg'
import House3 from '../images/house3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { createIncrementalCompilerHost, isFunctionDeclaration } from 'typescript';




const houses = [House1,House2,House3 ]

export function Images() {



    const [counter, setCounter] = useState(1)

    function next() {
        setCounter(counter + 1)
        console.log(counter)
    }
    function back() {
        setCounter(counter - 1)
        console.log(counter)
    }


    return (
       

        <div id="images" className="flex flex-col items-center justify-around space-y-16 max-h-[900px] mt-[12vh] mx-6">
            <img src={houses[counter%houses.length]} alt="houses" className="max-h-[800px]" />

            <div className="flex flex-row space-x-40">
                <FontAwesomeIcon onClick={back} icon={faArrowLeft} id="back" className="text-4xl sm:text-6xl md:text-7xl hover:text-blue-700 duration-300 cursor-pointer"/>
                <FontAwesomeIcon onClick={next} icon={faArrowRight} id="next" className="text-4xl sm:text-6xl md:text-7xl hover:text-blue-400 duration-300 cursor-pointer"/>
            </div>
           
        </div>
    );
}