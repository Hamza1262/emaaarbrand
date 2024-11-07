import mailIcon from "./../../image/email.png"
import Image from "next/image"
import whatIcon from "./../../image/whatsapp.png"

export default function Footer (){
    return(
        <main className="flex bg-black h-screen">
         <div className="w-[50%] items-center py-48">
                     <div className="text-[90px] pl-12 text-white">Like</div>
                     <div className="text-[90px] pl-12 text-white">our</div>
                     <div className="text-[90px] pl-12 bg-gradient-to-r from-[#7A3EFC] via-[#6D84EB] to-[#6F26E2] bg-clip-text text-transparent ">vibe</div>
         </div> 
         <div className="pl-1 w-[50%} py-48">
                 <h3 className="text-white text-[26px]">Curious to know how we roll out the magic?</h3>
                 <h4 className="text-white mt-12 text-[28px]">{"We'd"} love to share it too. Get in touch!</h4>
                 <div className="text-[28px]">
                    <a className="text-white"  href="mailto:contact@emaarbrands.com">contact@emaarbrands.com</a>
                 </div>
                 <span className="pt-6 flex gap-x-80">
                 <a className="" href="mailto:contact@emaarbrands.com">
                 <Image className="h-5 w-7" src={mailIcon} alt="mailIcon"></Image>
                 </a>
                 <a className="" target="_blank" href="https://api.whatsapp.com/send/?phone=03002593647&text&app_absent=0">
                 <Image className="h-5 w-7" src={whatIcon} alt="mailIcon"></Image>
                 </a>
                 </span>
         </div>           
        </main>
    )
}