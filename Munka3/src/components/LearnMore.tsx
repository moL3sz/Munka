import { learnMoreImages } from "../ref/vars";
import LearnMoreButton from "./LearnMoreButton";
export default function LearnMore() {
    const offset = 40;
    var index = -1;
    return (
        <div className="learnmore flex flex-col lg:flex-row mx-10 lg:mx-10 mt-[20vh] h-[70vh] break-all">
            <div className="col1 order-2 ml-[-8vh] sm:m-0">
                <div className="images-for-good relative w-2/3 lg:w-full mx-auto lg: m-0">
                    {
                        learnMoreImages.map((img) => {
                            index++;
                            return (
                                <img src={img.path} className="absolute shadow-lg" style={
                                    {
                                        top: `${offset * index / 10}vh`,
                                        left: `${offset * index / 10}vh`,
                                        opacity: `${0.3 + index / 3}`
                                    }
                                } />
                            )
                        })
                    }
                </div>
            </div>
            <div className="col2 order-1 lg:order-2 mx-auto mb-10 mr-0 lg:mr-20">
                <div className="subtitle text-4xl text-indigo-900 text-center lg:text-left font-semibold mb-2" >
                    Hitelezők és <br /> Ingatlantechnológiai cégek</div>
                <div className="content-s font-light mx-auto w-full mb-10 text-center lg:text-left">
                    <p>Csökkentett ár, Nagyobb hatékonyság</p>
                </div>
                <div className="profite-save font-normal break-normal">
                    <p className="text-indigo-900 font-semibold text-xl mb-5">Növeld a Profitod & Spórolj időt!</p>
                    <p className="font-light mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem tenetur veniam beatae corrupti magni ipsa labore earum culpa obcaecati sunt, nostrum dignissimos laborum id possimus. Dolores itaque unde magnam!</p>
                </div>
                <LearnMoreButton />

                <div className="profite-save font-normal break-normal ">
                    <p className="text-indigo-900 font-semibold text-xl mb-5">Könnyedén javíthatja a munkafolyamat mértékét</p>
                    <p className="font-light mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem tenetur veniam beatae corrupti magni ipsa labore earum culpa obcaecati sunt, nostrum dignissimos laborum id possimus. Dolores itaque unde magnam!</p>
                </div>
                <LearnMoreButton />


            </div>

        </div>
    );
}