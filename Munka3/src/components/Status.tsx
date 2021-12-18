import { useState } from "react";

export default function Status(){
    const [percent, setPercent] = useState(100);
    const [employees, setEmployees] = useState(26);
    const [projectCount, setProjectCount] = useState(1268);

    return (
        <div className="status mt-10">
            <div className="status-content grid lg:space-x-10 justify-center lg:justify-start">
                <div className="status-item flex flex-row space-x-3">
                    <p className="shrink grow basis-0 text-5xl font-light">{percent}%</p>
                    <p className="shrink grow basis-0 text-gray-600">Ügyféli kielégítés</p>

                </div>
                <div className="status-item flex flex-row space-x-3 lg:border-l">
                    <p className="shrink grow basis-0 text-5xl font-light lg:ml-10">{employees}</p>
                    <p className="shrink grow basis-0 text-gray-600">Dolgozók Magyarországon</p>

                </div>
                <div className="status-item flex flex-row lg:space-x-3 lg:border-l boder-slate-600">
                    <p className="shrink grow basis-0 text-5xl font-light lg:ml-10">{Math.floor(projectCount/1000)},{projectCount%1000}</p>
                    <p className="shrink grow basis-0 text-gray-600">Projekt kész</p>

                </div>
            </div>
        </div>
    )


}