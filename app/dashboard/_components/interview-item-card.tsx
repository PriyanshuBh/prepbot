import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'




type Interview = {
  id: number;
jsonMockResp: string;
jobPosition: string;
jobDesc: string;
jobExperience: string;
createdBy: string;
createdAt: string | null;
mockId: string;
  };
  
  type InterviewItemCardProps = {
    interview: Interview;
  };

  
function InterviewItemCard({interview}: InterviewItemCardProps) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
    
  return (
    <div className=' border border-stone-500 shadow-sm rounded-lg  p-3'>
        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At:{interview.createdAt}</h2>
        <div className='flex flex-row justify-between w-full mt-2 gap-5'>
            <Button size="sm" variant="subtle" className="w-[45%] cursor-pointer border-neutral-700 "
            onClick={onFeedbackPress}
            >Feedback</Button>
            <Button size="sm" className="w-[45%] cursor-pointer hover:scale-105"
            onClick={onStart}
            >Start</Button>

        </div>
    </div>
  )
}

export default InterviewItemCard