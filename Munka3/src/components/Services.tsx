import { faHouseUser, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
    return (
        <div className="servies mx-10 md:mx-20 mt-20">
            <div className="properties grid grid-flow-col">
                <div className="icons">
                    <FontAwesomeIcon icon={faLaptopHouse} />
                </div>
                <div className="desc-title text-indigo-900 text-2xl font-normal underline">
                    <p>Ház építés, kezelve</p>
                </div>
                <div className="desc-full">
                    Minden a legjobb kezekben van. A professzionális szakmabeli emberek minden a helyén
                    kezelnek. Teljes koordináció folyik az egész munka során.
                </div>


                <div className="icons">
                    <FontAwesomeIcon icon={faHouseUser} />
                </div>
                <div className="desc-title text-indigo-900 text-2xl font-normal">
                    <p>Azonnal beköltözés</p>
                </div>
                <div className="desc-full">
                    A mi csapatunk olyan végeredménnyel képes szolgálni, hogy az ügyfelek képesek azonnal beköltözni. Szuper gyors, internet, berendezett szobák és szolgáltatások telepítve(víz, gáz, elektromos áram).
                </div>


                <div className="icons">
                    <FontAwesomeIcon icon={faLaptopHouse} />
                </div>
                <div className="desc-title text-indigo-900 text-2xl font-normal">
                    <p>Kiépített közösség</p>
                </div>
                <div className="desc-full">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro distinctio repellat possimus ipsa repellendus soluta est rem sapiente dolore ducimus unde aspernatur ipsum velit modi enim tenetur, quod eveniet.
                </div>



            </div>
        </div>
    );
}