"use client"
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';

type FeedbackItem = {
  id: number;
  mockIdRef: string;
  question: string;
  correctAns: string | null;
  userAns: string | null;
  feedback: string | null;
  rating: string | null;
  userEmail: string | null;
  createdAt: string | null;
};


function Feedback() {
  const { interviewId } = useParams() as { interviewId: string };
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const GetFeedback = async () => {
      const result = await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, interviewId))
        .orderBy(UserAnswer.id);

      console.log(result);
      setFeedbackList(result);
    };

    GetFeedback();
  }, [interviewId]);

  return (
    <div className='p-10 text-white'>
      {feedbackList.length === 0 ? (
        <h2 className='font-bold text-xl !text-gray-500'>No Interview Feedback Record Found</h2>
      ) : (
        <>
          <h2 className='text-3xl font-bold !text-green-500'>Congratulations!</h2>
          <h2 className='font-bold text-2xl text-foreground'>Here is your interview feedback</h2>
          <h2 className='text-sm !text-gray-500'>
            Find below interview questions with correct answer, your answer, and feedback for improvement
          </h2>

          {feedbackList.map((item) => (
            <Collapsible key={item.id} className='mt-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                {item.question} <ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='!text-red-500 p-2 border rounded-lg'><strong>Rating:</strong> {item.rating}</h2>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm !text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm !text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'><strong>Feedback: </strong>{item.feedback}</h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <Button className='text-white cursor-pointer' onClick={() => router.replace('/dashboard')}>Go Home</Button>
    </div>
  );
}

export default Feedback;
