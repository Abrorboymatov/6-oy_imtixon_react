import Car from '../assets/Car.png'
import Svg from '../assets/svg.svg'




export default function () {



    return (


       <div className="flex flex-col items-center justify-center px-[30px] pt-[96px] gap-[70px] md:px-[140px]">
         <div className="flex flex-col items-center justify-center  gap-[24px] ">
                  <h3 className="text-[#232536] opacity-80 text-[14px]">MEET OUR TEAM</h3>
                  <h2 className="text-[#232536] text-[24px] text-center md:text-[48px]">We hired people who are <br />Always Passionate about <br /> what they do</h2>
                  <p className="text-[#232536] text-[16px] text-center">Through True Rich Attended does no end it his mother since real had half <br /> every him case in packages enquire we up ecstatic unsatiable saw .</p>
            </div>
            <div><img src={Car} alt="" /></div>
            <h4>See Our open positions </h4>
            
       </div>
    )
}