import Shape from '../assets/Shape.svg'
import Aka from '../assets/Aka.png'
import Buz from '../assets/Buz.png'



export default function BlokInnerHeader() {
    



    return (


             <div className='px-[30px] py-[96px] flex flex-col gap-[24px] md:px-[140px]'>
            <div><img src={Shape} alt="" /></div>
            <h1 className="text-[#232536] text-[24px] md:text-[48px]">Breaking the code How did we <br /> build our Figma plugin  </h1>
            <p className="text-[#232536] text-[16px] opacity-87">It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout. The Maker is a decentralized. We aim to attain the <br /> greatest satisfaction for our clients</p>
            <div className='flex gap-2 pt-[8px]'>
                <div><img src={Aka} alt="" /></div>
                <h3 className='text-[#232536] text-[16px] opacity-87'>Andrew Jonson <span className='opacity-60'>Posted on 27th January 2021</span></h3>
            </div>
            <div className='pt-[72px]'><img src={Buz} alt="" /></div>
            </div>
        
    )
}