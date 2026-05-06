import Raketa from '../assets/Raketa.svg'
import Hech from '../assets/Hech.svg'
import Odam from '../assets/Odam.svg'



export default function Expertise() {
    


    return  (
        <div className="flex flex-col px-[30px] pt-[96px] pb-[96px] gap-[30px] bg-[#ECF8F9] items-center md:px-[140px] md:flex-row md:justify-between">
            <div className="flex flex-col gap-[20px] ">
                  <h3 className="text-[#000000] text-[14px]">Our expertise</h3>
                  <h2 className="text-[#232536] text-[24px] md:text-[48px]">We want to get local <br /> identification in every <br /> corner of the world in this <br /> era of global citizenship</h2>
                  <p className="text-[#232536] text-[16px]">Through True Rich Attended does no end it his mother since <br /> favourable real had half every him case in packages enquire we up <br /> ecstatic unsatiable saw his giving Remain expense of gay produce <br /> excited perceived do an a china mean its so ye when in explained <br /> Hearts am next over match mr partiality not shoud latter thus as out <br /> no passed forming middleton exercise up</p>
            </div>
            <div className="flex flex-col gap-[12px]">
                <div className="flex bg-[#FFFFFF] pl-[32px] pr-[117px] py-[32px] gap-[16px]">
                    <div><img src={Raketa} alt="ass" /></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#000000] text-[16px]">On Time Delivery</h3>
                        <p className="text-[#5D5F6D] text-[14px]">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                    </div>
                </div>


                 <div className="flex bg-[#FFFFFF] pl-[32px] pr-[117px] py-[32px] gap-[16px]">
                    <div><img src={Hech} alt="" /></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#000000] text-[16px]">Best Quality</h3>
                        <p className="text-[#5D5F6D] text-[14px]">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                    </div>
                </div>


                 <div className="flex bg-[#FFFFFF] pl-[32px] pr-[117px] py-[32px] gap-[16px]">
                    <div><img src={Odam} alt="" /></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#000000] text-[16px]">Support Assist</h3>
                        <p className="text-[#5D5F6D] text-[14px]">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}