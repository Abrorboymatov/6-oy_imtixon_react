import { Link } from 'react-router-dom';


import Teamm from '../assets/Teamm.png'
import Negr from '../assets/Negr.png'
import Achka from '../assets/Achka.png'
import Soqol from '../assets/Soqol.png'
import Scinc from '../assets/Scinc.png'
import Mash from '../assets/Mash.png'
import Jentel from '../assets/Jentel.png'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'




export default function Team() {
    



    return (
        <div className="flex flex-col px-[30px] gap-[64px] md:px-[140px]">
            <div className="flex flex-col gap-[20px] ">
                  <h3 className="text-[#000000] text-[14px]">MEET OUR TEAM</h3>
                  <h2 className="text-[#232536] text-[24px] md:text-[48px]">Teamwork is the only <br /> way we work </h2>
                  <p className="text-[#232536] text-[16px]">Through True Rich Attended does no end it his mother since <br /> real had half every him case in packages enquire we up <br /> ecstatic unsatiable.</p>
            </div>
  <div className="grid grid-cols-3  md:grid-cols-4">
    
    
    <div className='relative overflow-hidden group'> 
     <img  src={Teamm} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />
      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Javena Melo</h3>
        <p className="text-[#FFFFFF] text-[14px]">Support Assist</p>
        
       
        <div className="flex gap-4 mt-4">
            <Link to="/teamtemplite"><img src={Facebook} alt="" /></Link>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>




    <div className='relative overflow-hidden group'> 
      <img  src={Negr} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Andrew Jonson</h3>
        <p className="text-[#FFFFFF] text-[14px]">Technical support</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>




    <div className='relative overflow-hidden group'> 
      <img  src={Achka} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Paresh Srichandan</h3>
        <p className="text-[#FFFFFF] text-[14px]">Testing Management</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>




    <div className='relative overflow-hidden group'> 
      <img  src={Soqol} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Hussen Abakas</h3>
        <p className="text-[#FFFFFF] text-[14px]">Development</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>



    <div className='relative overflow-hidden group'> 
      <img  src={Scinc} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Javena Melo</h3>
        <p className="text-[#FFFFFF] text-[14px]">Maintenance</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>



    <div className='relative overflow-hidden group'> 
      <img  src={Mash} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Andrew Jonson</h3>
        <p className="text-[#FFFFFF] text-[14px]">Designing</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>


    <div className='relative overflow-hidden group'> 
      <img  src={Jentel} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Paresh Srichandan</h3>
        <p className="text-[#FFFFFF] text-[14px]">Maintenance</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>




    <div className='relative overflow-hidden group'> 
      <img  src={Achka} className="object-cover transition-all duration-500 group-hover:blur-sm" alt="" />

      <div className="absolute inset-0 bg-[#232536FC] flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50">
        <h3 className="text-[#FFFFFF] text-[24px]">Andrew Jonson</h3>
        <p className="text-[#FFFFFF] text-[14px]">Full Stack Developer</p>
        
       
        <div className="flex gap-4 mt-4">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
        </div>
    </div>
   </div>
            </div>
        </div>
    )
}