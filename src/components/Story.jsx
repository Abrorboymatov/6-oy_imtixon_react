import Kubik from '../assets/Kubik.png'
import Kuk from '../assets/Kuk.svg'




export default function Story() {
    


    return (
        <div className="flex flex-col px-[30px] pt-[96px] pb-[96px] gap-[30px] items-center md:px-[140px] md:flex-row md:justify-between">
            <div className="flex  flex-col gap-[24px] ">
                  <div><img src={Kuk} alt="" /></div>
                  <h3 className="text-[#232536] text-[16px]">Our Story 👇 </h3>
                  <h2 className="text-[#232536] text-[24px] md:text-[36px]">From Startups to Titans of <br /> Industry.</h2>
                  <p className="text-[#232536] text-[16px]">Through True Rich Attended does no end it his mother since <br /> favourable real had half every him case in packages enquire we up <br /> ecstatic unsatiable saw his giving Remain expense of gay produce <br /> excited perceived do an a china mean its so ye when in explained <br /> Hearts am next over match mr partiality not shoud latter thus as out <br /> no passed forming middleton exercise up</p>
            </div>
            <div><img src={Kubik} alt="" /></div>
        </div>
    )
}