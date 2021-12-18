import { useEffect, useState } from "react"
import { imagePaths,image } from "../ref/vars"


export default function ImageViewer(){
    const [counter,setCounter] = useState<number>(0)

    useEffect(()=>{
        const int = setInterval(()=>{
            setCounter(counter+1)
            console.log(counter)
        },2000)
        return ()=>{
            clearInterval(int)
        }
    },[counter, useState])
    return (
        <div className="image_viewer w-[90%] mx-auto mt-10">
            <div className="image-viewer-content mx-auto w-[80%] ">
                <div style={{backgroundImage:`url(${imagePaths.paths[counter % imagePaths.paths.length].path})`}} className="image-trans h-[80vh] bg-cover bg-center shadow-black shadow-2xl"/>
                <div className="altern relative h-max px-30 text-sm text-black bg-white w-full md:w-[50vh] p-4 pb-6">
                    <p className="text-gray-500">{imagePaths.paths[counter  % imagePaths.paths.length].year} {imagePaths.paths[counter % imagePaths.paths.length].location}</p>
                    <p className="text-4xl text-indigo-900 font-bold">{imagePaths.paths[counter % imagePaths.paths.length].descr}</p>
                </div>
            </div>
        </div>
    )
}