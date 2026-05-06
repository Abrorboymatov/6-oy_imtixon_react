import Shape from '../assets/Shape.svg'
import Suhbat from '../assets/Suhbat.png'
import Qattiq from '../assets/Qattiq.png'
import Yosh from '../assets/Yosh.png'


export default function Header () {


    return (
        <div className="flex px-[30px] pt-[96px] flex-col gap-[24px] md:px-[140px]">
            <div><img src={Shape} alt="" /></div>
            <h3 className="text-[#000000] text-[14px]">Company</h3>
            <h1 className="text-[#232536] text-[24px] md:text-[48px]">Award-winning Company <br /> seen and used by millions <br /> around the world.</h1>
            <p className="text-[#232536] text-[16px]">It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout. The Maker is a decentralized. </p>
            <div className="grid gap-4 grid-cols-1 justify-center items-center pt-[40px] pb-[96px] md:grid-cols-3">
                <img src={Suhbat} alt="" />
                <img src={Qattiq} alt="" />
                <img src={Yosh} alt="" />
            </div>
        </div>
    )
}