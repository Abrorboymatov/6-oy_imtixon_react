import Logoipsum from '../assets/Logoipsum.svg'
import Oy from '../assets/Oy.svg'
import Koptok from '../assets/Koptok.svg'
import Shilyapa from '../assets/Shilyapa.svg'
import Nuqta from '../assets/Nuqta.svg'



export default function Logo() {
    



    return (
        <div className="grid grid-cols-2 gap-4 px-[30px] pb-[96px] items-center md:px-[140px] md:grid-cols-5 ">
            <div><img src={Logoipsum} alt="s" /></div>
            <div><img src={Oy} alt="s" /></div>
            <div><img src={Koptok} alt="s" /></div>
            <div><img src={Shilyapa} alt="s" /></div>
            <div><img src={Nuqta} alt="s" /></div>
        
        </div>
    )
}