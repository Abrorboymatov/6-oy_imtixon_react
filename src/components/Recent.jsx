import Kul from '../assets/Kul.svg'
import Komp from '../assets/Komp.png'
import Suhbat from '../assets/Suhbat.png'
import Kaktus from '../assets/Kaktus.png'
import Boshliq from '../assets/Boshliq.png'
import Chiroy from '../assets/Chiroy.png'


export default function Recent() {
    


    return (
              <>
              <h3 className='px-[30px] md:px-[140px]'>Read Recent Post</h3>
                <div className='px-[30px] grid grid-cols-1 gap-4 md:px-[140px] md:grid-cols-2'>
                    <div className='flex gap-[32px]'>
                        <div><img src={Komp} alt="" /></div>
                        <div className="flex flex-col gap-[34px] items-center justify-center">
                            <h3 className="text-[#232536] text-[24px]">Today’s best design <br /> trends for digital <br /> products</h3>
                            <div className='flex gap-2 items-center'>
                            <div><img src={Kul} alt="" /></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-[#232536] text-[16px]'>Andrew Jonson</h4>
                                    <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>



                     <div className='flex gap-[32px] items-center'>
                        <div><img src={Chiroy} alt="" /></div>
                        <div className="flex flex-col gap-[34px] items-center ">
                            <h3 className="text-[#232536] text-[24px]">Today’s best design <br /> trends for digital <br /> products</h3>
                            <div className='flex gap-2 items-center'>
                            <div><img src={Kul} alt="" /></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-[#232536] text-[16px]'>Andrew Jonson</h4>
                                    <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>



                     <div className='flex gap-[32px] items-center'>
                        <div><img src={Kaktus} alt="" /></div>
                        <div className="flex flex-col gap-[34px] items-center justify-center">
                            <h3 className="text-[#232536] text-[24px]">Today’s best design <br /> trends for digital <br /> products</h3>
                            <div className='flex gap-2 items-center'>
                            <div><img src={Kul} alt="" /></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-[#232536] text-[16px]'>Andrew Jonson</h4>
                                    <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>



                     <div className='flex gap-[32px] items-center'>
                        <div><img src={Boshliq} alt="" /></div>
                        <div className="flex flex-col gap-[34px] items-center justify-center">
                            <h3 className="text-[#232536] text-[24px]">Today’s best design <br /> trends for digital <br /> products</h3>
                            <div className='flex gap-2 items-center'>
                            <div><img src={Kul} alt="" /></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-[#232536] text-[16px]'>Andrew Jonson</h4>
                                    <p className='text-[#232536] text-[14px] opacity-60'>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

               </>
    )
}