import Image from "next/image"
import Link from "next/link"
import emaarlogo01 from "../../image/emaarlogo01.png"

export default function Header(){
    return(
        <>
        <div className=" flex h-32  bg-black  ">
            

            <div className="">
                
            <Image src={emaarlogo01} width={200} height={400} alt="logo01" className=" 	ml-72" />
            </div>
            <div className=" text-white flex p-6 items-center justify-evenly  ml-36 ">
            <Link href="/" className="px-9 hover:text-blue-700">Home</Link>
            <Link href="/about" className="px-9 hover:text-blue-700">About</Link>
            <Link href="" className="px-9 hover:text-blue-700">How acquisition works</Link>
            <Link href="" className="px-9 hover:text-blue-700">Contact</Link>
            </div>
             </div>
        
        </>
    )
}