import Image from "next/image"
import banner2 from "../../image/banner2.png"
import limitless from "../../image/limitless-text1.png"
import growth from "../../image/growth01.png"
import React from "react"
import evaluation from "../../image/2.png"
import Button from "./button"
import bg1 from "./../../image/transforming-bg4.png"
import dot2 from "./../../image/dotted-bg-pattern2.svg"
import hand from "./../../image/hand-full.png"

export default function HomePaage(){
  return(
    <main>
      
      <section className="h-full  w-[1140] py-10   flex bg-black justify-center items-center">
        <div className="text-white w-[1140]  h-full py-10 w-80 ">
            <h1 className="text-6xl h-max py-5">We buy, build &</h1>     
            <p className="text-6xl py-4 bg-gradient-to-r from-[#7A3EFC] via-[#6D84EB] to-[#6F26E2] bg-clip-text text-transparent ">scale e-commerce businesses</p> 
            <p className="text-2xl py-5">Welcome to Emaar Brand, the world of innovation and growth! Founded in 2023, we are an ecommerce acquisition and scaling company based in the vibrant landscape of the United Arab Emirates, with a keen eye on the rich tapestry of Pakistani brands.</p>
            < Button />
            <br /><br /><br /><br />
        </div>
        <div className=" w-[1140]">
           <Image src={banner2} alt="" height={500} width={390} ></Image>
        </div>
      </section>
      <section className="bg-black h-screen">
        <div className="w-2/4 ml-[580px]">

        <p className="text-white  text-3xl   ">Examining your {"brand's"} performance, we identify strengths and growth opportunities to elevate it. Our goal is to simplify and clarify your {`brand's`} message for universal understanding.</p>
       <div className=""> <br />< Button /></div>
        </div>
      </section>
      {/* IMAGE SECTION NEECHY  */}
      <section className="bg-black h-screen    ">
      <Image className=" mx-24 pt-7 " src={limitless} alt="Limitless"></Image>
      <Image className=" mx-24 pt-6" src={growth} alt="Limitless"></Image>
      </section>
      <section className="bg-black h-52 flex ">
        <div>

          <Image src={dot2} alt="dot2"></Image>
        </div>
        <div className="flex justify-between ">
          <div> 

        <h2 className=" text-5xl text-white">Transforming</h2>
        <h2 className=" text-5xl  bg-gradient-to-r from-[#7A3EFC] via-[#6D84EB] to-[#6F26E2] bg-clip-text text-transparent ">business</h2>
          </div>
          <div className="w-2/4">

        <h3 className="  text-white  ">We create an ecosystem for e-commerce businesses to build them into everyday consumer brands.</h3>
          </div>
        </div>
      </section >
      <section  className=" h-screen py-10" style={{
      backgroundImage: `url(${bg1.src})`,
      width: '100%',
      height: '100%',
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
    }}>
        <div className=" flex flex-col justify-center items-center box-border  ">
      <h2 className="text-white text-2xl font-bold w-max">01 Acquisition</h2>
      <p  className="text-white ml-6 w-80">Identify and obtain marketplace businesses that align with our list of growth criteria.</p>
      <h2 className="text-white text-2xl font-bold w-max">02 Integration</h2>
      <p  className="text-white ml-6 w-80"> Make the business work smoothly from start to finish-sourcing, supply chain, warehousing, inventory, marketplace listings, & handling money. We want the changes to be easy and simple.</p>
      <h2 className="text-white text-2xl font-bold ">03 Growth playbooks</h2>
      <p  className="text-white  ml-6 w-80">Put our growth plans into action using different strategies in branding, marketing, cataloging, sourcing, & expanding globally. This way, we make sure the growth is steady and lasting.</p>
        </div>
         
      </section>
      <section className="bg-black h-96 pt-10 pl-20 flex gap-x-36">
        <div>
        <h2 id="section" className="text-white text-6xl font-bold w-max ">How acquisition</h2>
        <h2 className="text-6xl font-bold   bg-gradient-to-r from-[#7A3EFC] via-[#6D84EB] to-[#6F26E2] bg-clip-text text-transparent">works?</h2>
        </div>
        <div className="">
          <h4 className="text-white ml-64">We use a quick and straightforward process to assess your business, conduct a careful examination, & present a fair offer.</h4>
        </div>
      <Image src={dot2} alt="dot2"></Image>
      </section>
      <section className="bg-black ">
      <div className="w-2/3  flex justify-center items-center">

        <div className="ml-24 pb-20">
          <h3  className="text-white text-2xl font-bold">01 Evaluation</h3>
          <h4 className="text-white">We spend time reviewing your business and arrive at a valuation based on our metrics. Post that, we issue a Letter of Intent (LOI) to formally express our interest.</h4>
        </div>
       <div>
          <Image src={evaluation} alt="evalution"></Image>
        </div> 
        
      </div>

      </section>
      <section className="flex justify-evenly items-center bg-slate-800 h-screen" >
        <div>

        <p className="text-[90px] text-white">We</p>
        <p className="text-[90px] bg-gradient-to-r from-[#7A3EFC] via-[#6D84EB] to-[#6F26E2] bg-clip-text text-transparent ">make</p>
        <p className="text-[90px] text-white">things</p>
        <p className="text-[90px] text-white">happen</p>
        </div>
        <div className="">
        <Image src={hand} alt="hand-full"></Image>
        </div>
      </section>
      
    </main>

    
  )
}