"use client";

import React from "react";
import Container from "./container";
import Particles from "./ui/particles";
import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { ShimmerButton } from "./magicui/shimmer-button";

export default function cta() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full text-white py-20">
      <Container className="pb-20 pt-16 max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-[#09090B]/20 text-center border border-neutral-700/20 overflow-hidden">
          <Particles
            refresh
            ease={80}
            quantity={80}
            color="#d4d4d4"
            className="hidden lg:block absolute inset-0 z-0"
          />
          <Particles
            refresh
            ease={80}
            quantity={35}
            color="#d4d4d4"
            className="block lg:hidden absolute inset-0 z-0"
          />

          <motion.div
            className="absolute  -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] "
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
            Ready to boost your <br />{" "}
            <span className="font-subheading italic">interview</span> ?
          </h2>
          <p className="text-sm md:text-lg text-center text-muted-foreground max-w-2xl mx-auto mt-4">
            Boost your chances of landing your dream job with AI-powered
            interview prep.
          </p>
          <div className="flex items-center justify-center mt-12 gap-x-4 ">
            <Link href="/sign-in" className="flex items-center gap-2 group   ">
              <ShimmerButton
                borderRadius="10px"
                background="bg-white"
                shimmerSize="0px"
                className="!bg-white  !text-black font-semibold"
              >
                {" "}
                Get Started
                <ArrowRightIcon className="size-4 group-hover:translate-x-1   transition-all duration-300 font-bold" />
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
