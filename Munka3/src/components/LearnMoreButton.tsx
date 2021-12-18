import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function LearnMoreButton(){
    return (
    <div className="lrmoreb mb-[5rem]">
        <a href="#" className="text-indigo-900 text-lg ">Tudj meg többet... <FontAwesomeIcon icon={faArrowRight} className="ml-2"/></a>
    </div>
    )
}