import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'





export const Footbar = () => {
    return (
        <div className=" grid grid-cols-1 bg-blue-50 2xl:grid-cols-2">
            <div className="m-12 grid grid-cols-1 place-items-center 2xl:place-items-start">
                <div className="text-xl md:text-2xl">Logo</div>
                <div className="w-[200px] md:w-[260px] lg:w-[280px] xl:w-[300px] text-justify mt-[20px] text-md md:text-lg xl:text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore dolores quos recusandae in architecto inventore fugiat vel autem. Suscipit ratione nesciunt quia ipsum quibusdam deserunt aperiam voluptatum enim officiis.</div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-x-20 gap-y-20 m-10 md:grid-cols-3">

                <div className="grid grid-cols-1 gap-y-4 text-md md:text-lg lg:text-xl 2xl:text-2xl">
                    <div className="font-bold text-blue-900 ">Jellemzők</div>
                    <div className="hover:text-blue-600 cursor-pointer">Rólunk</div>
                    <div className="hover:text-blue-600 cursor-pointer">Szolgáltatások</div>
                    <div className="hover:text-blue-600 cursor-pointer">Portfólió</div>
                    <div className="hover:text-blue-600 cursor-pointer">Kapcsolat</div>
                </div>

                <div className="grid grid-cols-1 gap-y-4 text-md md:text-lg lg:text-xl 2xl:text-2xl">
                    <div className="font-bold text-blue-900 ">Rólunk</div>
                    <div className="hover:text-blue-600 cursor-pointer">History</div>
                    <div className="hover:text-blue-600 cursor-pointer">Mit csinálunk</div>
                    <div className="hover:text-blue-600 cursor-pointer">Árak</div>
                    <div className="hover:text-blue-600 cursor-pointer">FAQ</div>
                </div>

                <div className="grid grid-cols-1 gap-y-16 m-12 text-md md:text-lg lg:text-xl m-6 2xl:text-2xl">
                    <select name="" id="" className="w-[120px] h-fit font-bold text-blue-900 bg-transparent">
                        <option value="Magyar">Magyar</option>
                        <option value="English">English</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Italiano">Italiano</option>
                    </select>

                    <div className="font-bold text-blue-900 text-md">Kövess minket</div>
                    <div className="flex flex-row space-x-12 text-2xl lg:text-3xl 2xl:text-4xl">
                        <FontAwesomeIcon icon={faFacebook}  className="text-blue-700 cursor-pointer hover:text-blue-900"/>
                        <FontAwesomeIcon icon={faInstagram} className="text-red-400 hover:text-red-600 cursor-pointer"/>
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 cursor-pointer"/>

                    </div>
                </div>

            </div>
        </div>
    )
}