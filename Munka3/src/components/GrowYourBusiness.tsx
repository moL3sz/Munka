import Hungary from "../ref/maker_hungary.png"

export default function GrowYourBusiness(){
    return (
        <div className="busines mt-20 mx-auto lg:w-fit">
            <div className="business-content">
                <div className="bus-title text-indigo-900 text-4xl md:text-7xl font-semibold text-center mb-5">
                    Növelje vállalkozását
                </div>
                <div className="business-desc text-gray-800 w-2/3 mx-auto font-light text-center text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br/>
                    Omnis id amet veniam voluptate! Animi labore iusto hic eveniet doloremque voluptatum?
                </div>
                <div className="hungary-holder mx-auto w-fit mt-10">
                    <img src={Hungary}/>
                </div>
            </div>
        </div>
    )
}