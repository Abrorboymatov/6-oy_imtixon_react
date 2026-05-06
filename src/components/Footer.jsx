import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'
import ker from '../assets/ker.svg'

export default function Footer() {
    return (

        <div className='pt-[96px]'>
            <div className="px-[30px] pb-[64px] grid grid-cols-1 justify-center gap-4 md:px-[140px] md:grid-cols-2">
                <div className="flex flex-col gap-[30px]">
                    <h2  className='text-[#232536] text-[48px]'>Let's make <br />something special </h2>
                    <h3  className='text-[#232536] text-[24px]'>Let's talk! 🤙 </h3>
                    <h4  className='text-[#232536] text-[18px]'>020 7993 2905</h4>
                    <a className="text-[#232536] text-[18px] hover:text-[green]" href="hi@finsweet.com">hi@finsweet.com</a>
                    <p className='text-[#232536] text-[14px]'>DLF Cybercity, Bhubaneswar, <br />India, &52050</p>
                </div>
            <div className='grid grid-cols-2 md:grid-cols-3'>
                <div className="flex flex-col gap-2 pt-[20px]">
                    <Link className="text-[#232536] text-[16px] hover:text-[green]" to="/">Home</Link>
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Service</a>
                    <Link className="text-[#232536] text-[16px] hover:text-[green]" to="/company">Company</Link>
                    <Link className="text-[#232536] text-[16px] hover:text-[green]" to="/career">Career</Link>
                    <Link className="text-[#232536] text-[16px] hover:text-[green]" to="/blog">Blog</Link>
                </div>

                <div className="flex flex-col gap-2 pt-[20px]">
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Service</a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Technical support</a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Testing</a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Development </a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">AWS/Azure </a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Consulting </a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Information Technology</a>
                </div>


                 <div className="flex flex-col gap-2 pt-[20px]">
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Resourses</a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">About Us</a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Testimonial</a>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Development </a>
                    <Link className="text-[#232536] text-[16px] hover:text-[green]" to="/privacypolicy">Privacy Policy</Link>
                    <a className="text-[#232536] text-[14px] opacity-80 hover:text-[green]" href="#">Terms of use </a>
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">News</a>
                </div>
</div>
    
            </div>

            <div className="bg-[#FFE6D2] py-[30px] px-[30px] py-[28px] flex justify-between items-center md:px-[140px]">
                <div className='flex gap-2'>
                    <img src={Logo} alt="" />
                    <a href="#">©2021 Finsweet</a>
                </div>
                <div className='flex items-center gap-[26px'>
                    {/* <a href="#"><img src={Facebook} alt="" /></a>
                    <a href="#"><img src={Twitter} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a> */}
                    <a href="#"><img src={ker} alt="" /></a>
                </div>
            </div>
        </div>
    )
}