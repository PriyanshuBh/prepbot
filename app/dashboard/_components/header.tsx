"use client"
import { UserButton } from '@clerk/nextjs'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Icons from "@/public/icons";
function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <header className="sticky top-0 w-full h-16 bg-[#09090B]/80 backdrop-blur-sm z-50 max-w-[1400px] mx-auto">
    <div className='flex h-full w-full mx-auto py-4 px-20 items-center justify-between shadow-sm text-white'>
      <div className="flex items-center">
                          <Link href="/" className="flex items-center gap-2">
                              <Icons.icon className="w-6" />
                              <span className="text-xl font-semibold  md:block">
                                  PrepBot
                              </span>
                          </Link>
                      </div>

        <ul className='hidden md:flex items-center gap-8'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-primary transition-all link
            cursor-pointer text-sm
            ${path=='/dashboard'&&'text-primary font-bold'}
            `}
            
            >Dashboard</li>
            </Link>
            
            <li className={`hover:text-primary link transition-all
            cursor-pointer text-sm
            ${path=='/dashboard/questions'&&'text-primary font-bold'}
            `}>Features</li>
              <Link href={"/dashboard/upgrade"}>
            <li className={`hover:text-primary link transition-all
            cursor-pointer text-sm
            ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
            `}>Blog</li>
            </Link>
            <li className={`hover:text-primary link transition-all
            cursor-pointer text-sm
            ${path=='/dashboard/how'&&'text-primary font-bold'}
            `}>Contact</li>
        </ul>
        <div className='w-[100px]  flex flex-col-reverse items-end' >
        <UserButton/>
        </div>
        
    </div>
    </header>
  )
}

export default Header