import banner2 from "./../../../image/about-banner-img.png"
import Image from "next/image"
import img2 from "./../../../image/2.png"
import integrityImg from "./../../../image/5.jpg"

export default function About (){
    return(
        <main>
            <section className=" bg-black h-screen justify-center items-center ">
                <div className="ml-72 flex w-[960px] justify-center items-center">

            <div className="  flex-row mt-44 ">
            <h1 className="text-white font-bold text-6xl w-[450px]">Who we <span className="bg-gradient-to-r from-[#7A3EFC] via-[#6D84EB] to-[#6F26E2] bg-clip-text text-transparent">are</span></h1>
            <h4 className="text-white mt-6 w-[450px]">We are redefining brands by identifying breakthrough businesses and helping them scale to their maximum potential on marketplaces.</h4>
            </div> 
            <div className="w-[450px]    ">
            <Image src={banner2} alt="banner"></Image>
            </div>
                </div>
            </section>
            <section className="flex bg-black">
                <div className="w-1/2 items-center  ">
                <Image className="ml-52 mb-32 -mt-20" src={img2} alt=""></Image>
                </div>
                <div className="text-white w-1/2  ">
                <h2 className="text-6xl" >Our <span className=" bg-gradient-to-r from-[#6d84eb] via-[#6F26E2] to-[#6F26E2] bg-clip-text text-transparent">story</span></h2>
                <h3 className="text-xl mt-3 w-[540px]" >Welcome to Emaar Brand, the world of innovation and growth! Founded in 2023, we are an ecommerce acquisition and scaling company based in the vibrant landscape of the United Arab Emirates, with a keen eye on the rich tapestry of Pakistani brands. Our journey is a testament to the power of collaboration and the pursuit of excellence. From our humble beginning, we've been on a mission to discover, acquire and elevate the finest brands from Pakistan, bringing them to a global stage. Our passion for fostering success drivers us to constantly seek out new opportunities and forge meaningful partnerships.</h3>
                </div>
                    

            </section>
            <section className="bg-black flex-col text-white">
                <div>

                <h2 className="text-6xl mx-96">We nature <span className="bg-gradient-to-r from-[#6d84eb] via-[#6F26E2] to-[#6F26E2] bg-clip-text text-transparent">the brands</span></h2>
                </div>
                <div className="ml-96 mt-7 " >

                <Image className="rounded-[50%] h-60 w-60 ml-48 hover:border hover:rounded-[50%] " src={integrityImg} alt="integrityImg"></Image>
                <h5 className="text-lg font-bold ml-64 mt-6">with integrity</h5>
                <p className="ml-20">We guarantee transparency throughout the entire value chain.</p>
                </div>

            </section>
        </main>
    )
}