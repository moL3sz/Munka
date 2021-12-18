export default function ShortDescription(){
    return (
        <div className="short_description mx-2 mt-40 antialiased font-sans md:mx-20">
            <div className="content flex flex-col space-x-3 md:flex-row justify-center items-start">
                <div className="motto mx-auto text-center text-5xl text-indigo-900 grow-[1] font-bold md:text-left md:basis-[320vh] mb-20">
                    Minőségben és kivitelezésben<br/>kifogástalan!
                    <div className="rolunk-gomb mt-10">
                        <a className="text-lg font-normal text-black p-[2vh] bg-yellow-400 px-[6vh]" href="#">Rólunk</a>
                    </div>
                </div>
                <div className="leiras text-left grow leading-[4vh]" style={{
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequatur, distinctio, deserunt, dicta itaque eveniet culpa cupiditate exercitationem vero sequi sunt impedit omnis magni molestiae. Excepturi cumque sequi consectetur natus.
                </div>
            </div>
        </div>
    )
}