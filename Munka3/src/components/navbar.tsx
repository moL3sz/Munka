export default function Navbar() {
    return (
        <div className="navbar text-gray-400 text-2xl flex flex-col border-t-[2.5vh] border-yellow-400 py-10 md:flex-row justify-center items-center md:text-xl">
            <div className="logo grow-[8] mx-20">
                Logo
                </div>
            <div className="rolunk grow">
                <span className="expand">Rólunk</span>
                </div>
            <div className="csapatunk grow">
                <span className="expand">Csapatunk</span> 
                </div>
            <div className="szolgaltatasok grow">
                <span className="expand">Szolgáltatások</span>
                </div>
            <div className="kapcsolat grow md:mr-40 p-3">
                <span className="border-2 border-yellow-400 p-3 hover:bg-yellow-400">Kapcsolat</span></div>
        </div>
    )
}