import Maska from '../assets/Maska.png'
import Soat from '../assets/Soat.png'
import Sall from '../assets/Sall.png'
import Tabrik from '../assets/Tabrik.png'
import Pul from '../assets/Pul.png'
import Kuch from '../assets/Kuch.png'




export default function () {


    return (

        <div className="flex flex-col px-[30px] pt-[96px] pb-[96px] gap-[64px] md:px-[140px] md:pt-[196px]">
             <div className="flex flex-col gap-[20px] ">
                  <h3 className="text-[#000000] text-[14px] opacity-87 uppercase">OUR WORK & CULTURE</h3>
                  <h2 className="text-[#232536] text-[24px] md:text-[36px]">Come and join a team of highly <br /> skilled professionals.</h2>
                  <p className="text-[#232536] text-[16px] opacity-60">Through True Rich Attended does no end it his mother since real had half <br /> every him case in packages enquire we up ecstatic unsatiable saw his giving <br /> Remain expense you position concluded. </p>
            </div>
            <div className="grid grid-cols-2 pt-[64px] md:grid-cols-3">
                <div className="flex flex-col p-[32px] gap-[8px]">
                    <div><img src={Maska} alt="" /></div>
                    <h3 className="text-[#232536] text-[16px]">Covid-19 insurance</h3>
                    <p className="text-[#232536] text-[14px] opacity-60">Through True Rich Attended does no end it his <br /> mother since real had halfdoes no end it</p>
                </div>


                <div className="flex flex-col p-[32px] gap-[8px]">
                    <div><img src={Soat} alt="" /></div>
                    <h3 className="text-[#232536] text-[16px]">Flexible working time</h3>
                    <p className="text-[#232536] text-[14px] opacity-60">Through True Rich Attended does no end it his <br /> mother since real had halfdoes no end it</p>
                </div>


                <div className="flex flex-col p-[32px] gap-[8px]">
                    <div><img src={Sall} alt="" /></div>
                    <h3 className="text-[#232536] text-[16px]">Work from home</h3>
                    <p className="text-[#232536] text-[14px] opacity-60">Through True Rich Attended does no end it his <br /> mother since real had halfdoes no end it</p>
                </div>


                <div className="flex flex-col p-[32px] gap-[8px]">
                    <div><img src={Tabrik} alt="" /></div>
                    <h3 className="text-[#232536] text-[16px]">Annual retreats</h3>
                    <p className="text-[#232536] text-[14px] opacity-60">Through True Rich Attended does no end it his <br /> mother since real had halfdoes no end it</p>
                </div>

                <div className="flex flex-col p-[32px] gap-[8px]">
                    <div><img src={Pul} alt="" /></div>
                    <h3 className="text-[#232536] text-[16px]">Learning stipend</h3>
                    <p className="text-[#232536] text-[14px] opacity-60">Through True Rich Attended does no end it his <br /> mother since real had halfdoes no end it</p>
                </div>

                <div className="flex flex-col p-[32px] gap-[8px]">
                    <div><img src={Kuch} alt="" /></div>
                    <h3 className="text-[#232536] text-[16px]">Gym membership</h3>
                    <p className="text-[#232536] text-[14px] opacity-60">Through True Rich Attended does no end it his <br /> mother since real had halfdoes no end it</p>
                </div>
            </div>
        </div>
    )
}