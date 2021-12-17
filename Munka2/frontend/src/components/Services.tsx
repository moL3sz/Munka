import { faBuilding, faHeart, faPalette, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDefaultSettings } from "http2";
import React, { useEffect } from "react"
import planning from "../images/planning.jpg"
import design from "../images/design.jpg"
import building from "../images/building.png"
import success from "../images/success.png"
import Aos from 'aos'
import 'aos/dist/aos.css'




export const Services = () => {

    useEffect(()=>{
        Aos.init({ duration:2000 })
    },[])



    return (

        <div id="services" className="mt-[10vh] m-8 grid grid-cols-1 place-items-center gap-y-20 text-md xl:text-lg">

            <div data-aos="fade-up" className="text-3xl xl:text-5xl text-orange-600">
                Szolgáltatások
            </div>

            <div className="grid grid-cols-1 place-items-center gap-y-20">

                <div className="grid gap-y-6 place-items-center gap-x-12 md:grid-cols-2  ">

                    <div data-aos="fade-right" className="grid grid-cols-1 place-items-center  gap-y-8 xl:w-[400px]">
                        <FontAwesomeIcon icon={faRuler} className="text-4xl xl:text-8xl text-slate-400"/>
                        <div className="text-xl font-bold ">Tervezés</div>
                        <div className="text-lg xl:text-xl"><span className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl p-2 text-orange-700">M</span>orem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam, commodi ea quas dolorem tenetur vel velit doloremque mollitia placeat praesentium rerum nam! Rerum qui non quaerat obcaecati consequuntur quidem minima in voluptate, nihil praesentium assumenda tempora vel quod expedita reprehenderit distinctio saepe eius quo neque dignissimos ad architecto perferendis. Blanditiis a iure, distinctio praesentium cumque nostrum tenetur aspernatur quo.</div>
                    </div>

                    <img src={planning} data-aos="fade-left" className="w-[400px] h-[150px] sm:w-[420px] sm:h-[250px] md:w-[450px] md:h-[300px] xl:w-[800px] xl:h-[500px]"/>
                </div>


                <div className="grid gap-y-6 gap-x-12 md:grid-cols-2 place-items-center">

                    <img data-aos="fade-right" src={design} className="w-[400px] h-[150px] md:[450px] md:h-[300px] xl:w-[800px] xl:h-[500px]" />

                    <div data-aos="fade-left" className="grid grid-cols-1 place-items-center  gap-y-8 xl:w-[400px]">
                        <FontAwesomeIcon icon={faPalette} className="text-4xl xl:text-8xl text-slate-500"/>
                        <div className="text-xl font-bold ">Design</div>
                        <div className="text-lg xl:text-xl"><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 text-orange-600">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam, commodi ea quas dolorem tenetur vel velit doloremque mollitia placeat praesentium rerum nam! Rerum qui non quaerat obcaecati consequuntur quidem minima in voluptate, nihil praesentium assumenda tempora vel quod expedita reprehenderit distinctio saepe eius quo neque dignissimos ad architecto perferendis. Blanditiis a iure, distinctio praesentium cumque nostrum tenetur aspernatur quo.</div>
                    </div>


                </div>

                <div className="grid gap-x-12 gap-y-6 place-items-center md:grid-cols-2">

                    <div data-aos="fade-right" className="grid grid-cols-1 place-items-center gap-y-8 xl:w-[400px]">
                        <FontAwesomeIcon icon={faBuilding} className="text-4xl xl:text-8xl text-slate-600"/>
                        <div className="text-xl font-bold">Kivitelezés</div>
                        <div className="text-lg xl:text-xl"><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-500 p-2">P</span>orem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam, commodi ea quas dolorem tenetur vel velit doloremque mollitia placeat praesentium rerum nam! Rerum qui non quaerat obcaecati consequuntur quidem minima in voluptate, nihil praesentium assumenda tempora vel quod expedita reprehenderit distinctio saepe eius quo neque dignissimos ad architecto perferendis. Blanditiis a iure, distinctio praesentium cumque nostrum tenetur aspernatur quo.</div>
                    </div>

                    <img src={building} data-aos="fade-left" className="w-[400px] h-[150px] md:w-[450px] md:h-[300px] xl:w-[800px] xl:h-[500px]" />
                </div>

                <div className="grid gap-x-12  gap-y-6 place-items-center md:grid-cols-2">

                    <img data-aos="fade-right" src={success} className="w-[400px] h-[150px] md:w-[450px] md:h-[300px] xl:w-[800px] xl:h-[500px]" />

                    <div data-aos="fade-left" className="grid grid-cols-1 place-items-center gap-y-8 xl:w-[400px]  ">
                        <FontAwesomeIcon icon={faHeart} className="text-4xl xl:text-8xl text-slate-700"/>
                        <div className="text-xl font-bold">Siker</div>
                        <div className="text-lg xl:text-xl"><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 text-orange-400">K</span>orem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam, commodi ea quas dolorem tenetur vel velit doloremque mollitia placeat praesentium rerum nam! Rerum qui non quaerat obcaecati consequuntur quidem minima in voluptate, nihil praesentium assumenda tempora vel quod expedita reprehenderit distinctio saepe eius quo neque dignissimos ad architecto perferendis. Blanditiis a iure, distinctio praesentium cumque nostrum tenetur aspernatur quo.</div>
                    </div>


                </div>

            </div>



        </div>

    );
}