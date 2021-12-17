import React from 'react'
import { Navbar } from './Navbar';
import { useEffect } from 'react';



export const Header = () =>{
    

    return(

        <div id="header" className="w-screen flex flex-col items-center">
            <Navbar/>

            <div id="greet" className="text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl translate-y-[5vh] lg:translate-y-[30vh] text-white p-4">
                <span className="text-orange-600">Üdv</span>özöljük
            </div>
        </div>
    );

}