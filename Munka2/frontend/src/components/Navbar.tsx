import React from "react";





export const Navbar = () => {


    return (

        <div className="grid grid-cols-1 gap-x-10 place-items-center text-lg 2xl:grid-cols-2 2xl:gap-x-12">

            <div className="m-12">Logo</div>

            <div className="grid grid-cols-1 gap-y-12 m-12 lg:grid-cols-4 lg:gap-x-12 lg:text-xl">
                <div id="nav-link">
                    <a href="#about">Rólunk</a>
                </div>
                <div id="nav-link">
                    <a href="#services">Szolgáltatásaink</a>
                </div>
                <div id="nav-link">
                    <a href="#projects">Projektek</a>
                </div>
                <div id="nav-contact" className="">
                    <a href="">Kapcsolat</a>
                </div>
            </div>
        </div>
    );
}