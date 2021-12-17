import React from 'react'



export function Navbar(){


    return(
        
           <ul className="nav flex flex-col sm:flex-row items-center">
               <li>
                   Logo
               </li>
               <li className="border-solid border-2 border-slate-300 text-center hover:bg-slate-300 hover:text-white hover:rounded-lg">
                    <a href="#about">Rólunk</a>
               </li>
               <li className="border-solid border-2 border-slate-300 text-center hover:bg-slate-300 hover:text-white hover:rounded-lg"> 
                    <a href="#working">Működésünk</a>
               </li >
               <li className="border-solid border-2 border-slate-300 text-center hover:bg-slate-300 hover:text-white hover:rounded-lg"> 
                    <a href="#projects">Projektek</a>
               </li >
               <li className="border-solid border-2 border-blue-600 text-center text-blue-600 hover:bg-blue-600 hover:text-white hover:rounded-lg"> 
                    <a href="">Kapcsolat</a>
               </li >
           </ul>
    );
}