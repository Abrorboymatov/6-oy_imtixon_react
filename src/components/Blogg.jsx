import Suhbattt from '../assets/Suhbattt.png'
import Yordam from '../assets/Yordam.png'






export default function Blogg () {




    return (

         <div className='px-[30px] pt-[131px] pb-[96px] flex flex-col gap-[48px] bg-[#ECF8F9] md:px-[140px]'>
            <h4 className='text-[#232536] text-[48px]'>Blog posts from Javena</h4>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
                <div className='flex gap-[32px]  bg-[#FFFFFF]'>
                    <div><img src={Suhbattt} alt="" /></div>
                    <div className="flex flex-col py-[32px] pr-[32px] gap-[24px]">
                        <p className="text-[#232536] text-[14px] opacity-60">Jan 19, 2021</p>
                        <h4 className="text-[#232536] text-[24px]">Today’s best design <br /> trends for digital <br /> products</h4>
                        <a className='text-[#444CFC] text-[16px]' href="#">Read More</a>
                    </div>
                </div>



                <div className='flex gap-[32px] bg-[#FFFFFF]'>
                    <div><img src={Yordam} alt="" /></div>
                    <div className="flex flex-col py-[32px] pr-[32px] gap-[24px]">
                        <p className="text-[#232536] text-[14px] opacity-60">Jan 19, 2021</p>
                        <h4 className="text-[#232536] text-[24px]">A practical guide to <br /> building a brand <br /> strategy</h4>
                        <a className='text-[#444CFC] text-[16px]' href="#">Read More</a>
                    </div>
                </div>

            </div>
         </div>

    )
}