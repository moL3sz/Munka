import Status from "./Status"
export default function Leading() {
    return (
        <div className="leader-content mx-10 lg:mx-40 mt-[60vh] lg:mt-[30vh]">
            <div className="col-content flex flex-col lg:flex-row">
                <div className="lcol1 grow-[1.5] shrink basis-0 mb-10">
                    <p className="lg:text-8xl text-4xl font-semibold text-indigo-900">Mi vagyunk a vezetők a epítőiparban.</p>
                    <p className="mt-5 text-xl text-indigo-900 underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam culpa natus placeat eligendi accusantium?</p>
                    <p className="mt-10 text-gray-400 leading-[4vh]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam ducimus consequatur cum itaque officia illo iusto quaerat, sint earum libero assumenda at impedit neque quidem ex dolorum eligendi quisquam nobis nesciunt sapiente sit. Assumenda dolores inventore aut labore, consequatur quae cumque ex odio vitae sequi iure tempora corrupti rem.
                    </p>
                    <Status/>
                </div>

                <div className="lcol2 grow shrink basis-0 mx-auto">
                    <div className="yellow-bg w-[30vh] lg:w-[50vh] md:[40vh] sm:[30-vh] border-yellow-400 border rounded-[50%] mx-auto">
                        <img src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Elena%20Elisseeva,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1425904474/uf7r7p9ayb5zrsnkhvjg.jpg" className="mix-blend-multiply sm:h-[400px] md:h-[800px] h-[400px] mx-auto" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}