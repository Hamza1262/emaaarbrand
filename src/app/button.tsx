import arrowclick from "../../image/arrow-click.png"
import Link from "next/link"
import Image from "next/image" 

export default function Button(){
    return(
        <main>
            <Link className="flex text-white text-2xl  " href={"/"}>Explore More
       <Image className="text-white w-9" src={arrowclick} alt="" height={20} width={20}></Image>
        </Link>
        </main>
    )
}