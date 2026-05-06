import Shape from '../assets/Shape.svg'
import Uyin from '../assets/Uyin.png'
import Aka from '../assets/Aka.png'
import Kul from '../assets/Kul.svg'
import Ne from '../assets/Ne.svg'
import Gal from '../assets/Gal.svg'
import { Link } from 'react-router-dom';




export default function BlokHeader() {



    return (
        
        <div className='flex flex-col gap-4 px-[30px] pt-[96px] pb-[96px] md:px-[140px] md:flex-row md:justify-between'>
            <div className='flex flex-col gap-[24px] '>
            <div><img src={Shape} alt="" /></div>
            <h3 className="text-[#000000] text-[14px] opacity-87 uppercase">TREnding</h3>
            <h1 className="text-[#232536] text-[24px] md:text-[48px]">Breaking the code How  <br />did we build our Figma <br /> plugin </h1>
            <p className="text-[#232536] text-[16px] opacity-87">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. The Maker is a decentralized. <br /> We aim to attain the.</p>
            <Link className='text-[#444CFC] text-[16px]' to="/blokinner">Read More</Link>
            <div className='flex gap-2 pt-[16px]'>
                <div><img src={Aka} alt="" /></div>
                <h3 className='text-[#232536] text-[16px] opacity-87'>Andrew Jonson <span className='opacity-60'>Posted on 27th January 2021</span></h3>
            </div>
            <div className='pt-[25px]'><img src={Uyin} alt="" /></div>
            </div>


            <div className='flex flex-col bg-[#FFDFC6] max-h-[738px] gap-[48px] p-[72px]'>
                <div className='flex flex-col gap-[16px]'>
                    <h3 className='text-[#232536] text-[24px]'>Great design expectations <br /> prejudice in digital products <br /> in Next Year</h3>
                    <div className='flex gap-2 items-center'>
                        <div><img src={Kul} alt="" /></div>
                        <div className='flex flex-col'>
                            <h4 className='text-[#232536] text-[16px]'>Andrew Jonson</h4>
                            <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                        </div>
                    </div>
                </div>


                 <div className='flex flex-col gap-[16px]'>
                    <h3 className='text-[#232536] text-[24px]'>Great design expectations <br /> prejudice in digital products <br /> in Next Year</h3>
                    <div className='flex gap-2 items-center'>
                        <div><img src={Ne} alt="" /></div>
                        <div className='flex flex-col'>
                            <h4 className='text-[#232536] text-[16px]'>Mathew Jasele</h4>
                            <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                        </div>
                    </div>
                </div>


                 <div className='flex flex-col gap-[16px]'>
                    <h3 className='text-[#232536] text-[24px]'>Great design expectations <br /> prejudice in digital products <br /> in Next Year</h3>
                    <div className='flex gap-2 items-center'>
                        <div><img src={Gal} alt="" /></div>
                        <div className='flex flex-col'>
                            <h4 className='text-[#232536] text-[16px]'>Hussen Abakas</h4>
                            <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}