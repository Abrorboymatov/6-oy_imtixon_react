import Teamm from '../assets/Teamm.png'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'



export default function TeamInnerNav() {
    




    return (


        <div className="px-[30px] py-[96px] flex flex-col items-center justify-center gap-[24px]">
                <img src={Teamm} alt="" />
                <h4  className='text-[#232536] text-[16px]'>Javena Melo</h4>
                <h6  className='text-[#232536] text-[16px] uppercase opacity-70'>CEO</h6>
                <p className='text-[#232536] text-[16px] text-center opacity-87'>Through True Rich Attended does no end it his mother since <br /> real had half every him case in packages enquire we up <br /> ecstatic unsatiable.</p>
                <div className="flex gap-4 mt-4">
                    <a href="#"><img src={Facebook} alt="" /></a>
                    <a href="#"><img src={Twitter} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a>
                </div>
            
        </div>
    )
}