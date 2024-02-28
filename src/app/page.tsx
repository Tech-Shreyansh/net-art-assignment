import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-200 p-2">
      <Image src={'/logo.png'} alt="logo" width={200} height={400} className="w-1/2 mx-auto"/>
      <div className="flex flex-col md:flex-row my-4">
        <Image src={'/1.png'} alt="logo" width={400} height={800} className="w-1/3 mx-auto"/>
        <div className="p-4 text-xs md:text-sm space-y-4">
          <p className="font-extrabold"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul className="ml-8 list-disc">
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <Image src={'/2.png'} alt="logo" width={1400} height={800} className="w-full"/>
          <p className="ml-4">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <p className="text-sm md:text-base my-4">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      <Image src={'/3.png'} alt="logo" width={1400} height={800} className="m-4 md:w-3/4 mx-auto"/>
      <p className="text-xs md:text-sm text-center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <hr className="border-2 border-red-500 my-4" />
      <p className="text-xs md:text-sm text-center font-extrabold my-4">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <p className="mb-8 text-center text-xs md:text-sm">CHEMICALS & PROCESS <span className="text-red-500">|</span> POWER <span className="text-red-500">|</span> WATER & WASTE WATER <span className="text-red-500">|</span> OILS & GAS <span className="text-red-500">|</span> PHARMA <span className="text-red-500">|</span> SUGARS & DISTILLERIES <span className="text-red-500">|</span> PAPER & PULP <span className="text-red-500">|</span> MARINE & DEFENCE <span className="text-red-500">|</span> METAL & MINING <span className="text-red-500">|</span> FOOD & BEVERAGE <br /> PETROCHEMICAL & REFINERIES <span className="text-red-500">|</span> SOLAR <span className="text-red-500">|</span> BUILDING <span className="text-red-500">|</span> HVAC <span className="text-red-500">|</span> FIRE <span className="text-red-500">|</span> FIGHTING <span className="text-red-500">|</span> AGRICULTURE & RESIDENTIAL</p>
    <Footer />
    </div>
  );
}
