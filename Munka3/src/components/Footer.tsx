export default function Footer() {
    return (
        <div className="footer-content h-100 mx-1 md:mx-[10rem] mt-20 mb-10">
            <div className="hr w-[80%] border-t-[1px] border-gray-200 border-solid mx-auto mb-10"></div>
            <div className="foo-content flex flex-col md:flex-row mx-auto space-x-10">
                <div className="foo-logo grow shrink basis-0 w-fit mx-auto">
                    Logo
                </div>
                <div className="grow shrink basis-0 font-light text-gray-900">
                    <p className="text-2xl text-indigo-900 mb-5 font-normal">Kapcsolatunk</p>
                    <p className="leading-8 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo ipsa, modi, dolorem fuga soluta optio, eveniet consequatur amet iusto rerum quos sequi odit aspernatur quas itaque quisquam. Eligendi, aliquam.
                    </p>
                    <p className="telszam text-3xl text-indigo-900 mt-5 font-light w-fit border-b-2 border-solid border-indigo-900">+36/30-876-7891</p>
                    <br />
                    <p className="eail">companyname@domain.com</p>
                </div>
                <div className="grow shrink basis-0">
                    <p className="text-2xl text-indigo-900 mb-5">Helyzetünk</p>
                    <p className="leading-8 font-light text-gray-900">3234 Medve, Határtalan 12/a <br />
                        Budapest XII. ker
                    </p>

                </div>


            </div>
        </div>
    )
}