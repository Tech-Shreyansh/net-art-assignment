import { Facebook, Globe, Phone } from "lucide-react";

function Footer () {
    return(
        <div className="flex flex-col md:flex-row bg-red-500 md:h-[12vh] md:h-[15vh] text-white text-xs md:text-base py-2 md:py-8 px-16 justify-center items-center space-y-2 md: space-y-0 justify-between">
            <p className="flex items-center space-x-1"> <Phone fill="white" size={20} className="mx-2"/> Toll Free <strong> 1800 200 1234</strong></p>
            <a href="https://www.facebook.com/cribumps" className="flex items-center space-x-1"><Facebook fill="white" size={20} className="mx-2"/>https://www.facebook.com/cribumps</a>
            <a href="http://www.crigroups.com" className="flex items-center space-x-1"><Globe size={20} className="mx-2"/>http://www.crigroups.com</a>
        </div>
    )
}

export default Footer;