import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "./dashboard/_components/header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import YT from "@/components/img/yt";
import PH from "@/components/img/product-hunt";
import Reddit from "@/components/img/reddit";
import Container from "@/components/container";
import Icons from "@/public/icons";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import CTA from "@/components/cta";
export default function Home() {
  return (
    <div className="">
      <Header />
      <section className=" ">
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-14">
          <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 "></div>

          <div className="flex flex-col items-center justify-center gap-y-8 relative">
            <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen ">
            <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-4 text-[#FAFAFA]/70" />
                        <Icons.circle2 className="size-1 text-[#FAFAFA]/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-[#FAFAFA]/50" />
                        <Icons.circle1 className="size-4 text-[#FAFAFA]/60" />
                        <Icons.circle2 className="size-1 text-[#FAFAFA]/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-1 text-[#FAFAFA]/50" />
                        <Icons.circle2 className="size-1 text-[#FAFAFA]/90" />
                        <Icons.circle1 className="size-4 text-[#FAFAFA]/60" />
                        <Icons.circle2 className="size-1 text-[#FAFAFA]/90" />
                    </OrbitingCircles>
            </Container>

            <div className="flex flex-col items-center justify-center text-center gap-y-4 mx-auto ">
              <Container className="relative  md:block overflow-hidden ">
               
                <ShimmerButton  className="group  relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto "><span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                  <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                    <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[9px] font-medium mr-2 text-white">
                      NEW
                    </span>
                    Explore the Features
                  </span></ShimmerButton>
              </Container>
              <Container delay={0.15}>
                <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold text-center !leading-tight max-w-4xl mx-auto text-neutral-100">
                Your AI-Based Mock <span className="">Interview </span>Assistant
                </h1>
              </Container>
              <Container delay={0.2}>
                <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                Boost your chances of landing your dream job with AI-powered interview prep.
                </p>
              </Container>
              <Container delay={0.25} className="z-20">
                <div className="flex items-center justify-center mt-6 gap-x-4">
                  <Link href="/dashboard" className="flex items-center gap-2 group   ">
                  <ShimmerButton borderRadius="10px" background= "bg-white" shimmerSize = "0px" className="!bg-white  !text-black font-semibold"> Get Started
                  <ArrowRightIcon className="size-4 group-hover:translate-x-1   transition-all duration-300 font-bold" /></ShimmerButton>

                  </Link>
                </div>
               
              </Container>
              <Container delay={0.3} className="relative">
                <div className="relative rounded-xl md:rounded-[32px] border border-neutral-700 p-2 backdrop-blur-lg mt-10 max-w-6xl mx-auto ">
                  <div className="absolute top-1/8 left-1/2 -z-1 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] image-glow"></div>
                  <div className="hidden md:block absolute -top-1/8 left-1/2 -z-1 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] image-glow"></div>

                  <div className="rounded-lg lg:rounded-[22px] border border-neutral-700 bg-[#09090B]">
                    <Image
                      src="/dashboard.png"
                      alt="dashboard"
                      width={1920}
                      height={1080}
                      className="rounded-lg lg:rounded-[20px]"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-t from-[#09090B] to-transparent absolute bottom-0 inset-x-0 w-full h-1/2"></div>
              </Container>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden ">
            <Container delay={0.1}>
            <div className="absolute flex  size-40 rounded-full bg-blue-500 blur-[10rem] -top-16 left-1/2 -translate-x-1/2 "></div>
            <div className="px-4 mt-10 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-200 text-2xl lg:text-4xl ">
               <span className="font-subheading italic">featured  </span> 
               IN
            </span>
            <div className="flex flex-wrap justify-center items-center mt-20 mb-24 text-gray-500 sm:justify-between">
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <YT />
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <PH />
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <Reddit />
              </a>
            </div>
          </div>
            </Container>
        </div>
</section>


<section>
<div className="relative flex flex-col items-center justify-center w-full pt-8 pb-14">
            <Container>
                <div className="flex text-white/90 flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading text-white/90 font-medium !leading-snug mt-6">
                    How it <span className="font-subheading italic">works?</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-muted-foreground mb-8 mt-6">
                    Give mock interview in just 3 simplar easy step.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">

               
                    <Container  delay={0.1 + 0 * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-neutral-700/50 hover:border-neutral-700/100 transition-colors max-w-[350px] h-[250px]"
                      
                    )}>
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                           <div className="mt-6 mb-4 w-full   overflow-hidden text-white">
                            <AtomIcon className="h-8 w-8 mx-auto" />
                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                                Write promot for your form
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
                            </p>

                           
                        </MagicCard>
                        
                    </Container>
                    <Container  delay={0.1 + 1 * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-neutral-700/50 hover:border-neutral-700/100 transition-colors max-w-[350px] h-[250px]"
                      
                    )}>
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                           <div className="mt-6 mb-4 w-full   overflow-hidden text-white">
                           <Edit className="h-8 w-8 mx-auto" />

                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                                Edit Your form
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
                            </p>

                           
                        </MagicCard>
                        
                    </Container>
                    <Container  delay={0.1 + 2 * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-neutral-700/50 hover:border-neutral-700/100 transition-colors max-w-[350px] h-[250px]"
                      
                    )}>
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                           <div className="mt-6 mb-4 w-full   overflow-hidden text-white">
                           <Share2 className="h-8 w-8 mx-auto" />
                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                                Share & Start Accepting Responses
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
                            </p>

                           
                        </MagicCard>
                        
                    </Container>
     
            </div>
            <div className="flex items-center justify-center mt-12 gap-x-4 ">
                  <Link href="/sign-in" className="flex items-center gap-2 group   ">
                  <ShimmerButton borderRadius="10px" background= "bg-white" shimmerSize = "0px" className="!bg-white  !text-black font-semibold"> Get Started
                  <ArrowRightIcon className="size-4 group-hover:translate-x-1   transition-all duration-300 font-bold" /></ShimmerButton>

                  </Link>
                </div>
        </div>
      <CTA/>
</section>



    </div>
  );
}
