"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './interview-item-card';


type InterviewData = {
    id: number;
    jsonMockResp: string;
    jobPosition: string;
    jobDesc: string;
    jobExperience: string;
    createdBy: string;
    createdAt: string | null;
    mockId: string;
  };


function InterviewList() {

    const {user}=useUser();
    const [interviewList,setInterviewList]=useState<InterviewData[]>([]);

    useEffect(() => {
        const GetInterviewList = async () => {
            if (!user || !user.primaryEmailAddress?.emailAddress) {
                console.error("User or email missing");
                return;
            }
    
            const result = await db.select()
                .from(MockInterview)
                .where(eq(MockInterview.createdBy, user.primaryEmailAddress.emailAddress))
                .orderBy(desc(MockInterview.id));
    
            console.log(result);
            setInterviewList(result);
        };
    
        if (user) GetInterviewList();
    }, [user]);
    
 

  return (
    <div>
        <h2 className='font-medium text-xl '>Previous Mock Interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList?.length>0?interviewList.map((interview,index)=>(
                <InterviewItemCard 
                interview={interview}
                key={index} />
            ))
            :
            [1,2,3,4].map((item,index)=>(
                <div key={index} className='h-[100px] w-full bg-gray-200 animate-pulse rounded-lg '>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default InterviewList