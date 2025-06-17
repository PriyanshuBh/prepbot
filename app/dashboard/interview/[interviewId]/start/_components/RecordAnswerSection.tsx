"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'


type Question = {
  question: string;
  answer: string;
};

type InterviewData = {
  mockId: string;
};

interface Props {
  mockInterviewQuestion: Question[] ;
  activeQuestionIndex: number;
  interviewData: InterviewData ;
}
const RecordAnswerSection: React.FC<Props> = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
    const [userAnswer,setUserAnswer]=useState('');
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const {
    
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
   
      } = useSpeechToText({
        continuous:false,
        useLegacyResults: false
      });

      useEffect(()=>{
       
        results?.forEach((result) => {
          if (typeof result !== 'string' && 'transcript' in result) {
            setUserAnswer((prevAns) => prevAns + result.transcript);
          }
        });
      
      },[results])

      useEffect(() => {
        const updateAnswer = async () => {
          if (!isRecording && userAnswer?.length > 10) {
            try {
              setLoading(true);
      
              const question = mockInterviewQuestion[activeQuestionIndex];
      
              const feedbackPrompt = `
                Evaluate the user's answer to the following interview question.
                Question: "${question?.question}"
                User Answer: "${userAnswer}"
                Please return a JSON with the following structure:
                {
                  "rating": "X/10",
                  "feedback": "Your answer was good, but you can improve..."
                }
                Keep it short and to the point (3-5 lines max).
              `;
      
              const result = await chatSession.sendMessage(feedbackPrompt);
              const rawText = await result.response.text();
              const cleanText = rawText.replace(/```json|```/g, '').trim();
      
              const parsedFeedback = JSON.parse(cleanText);
      
              const dbResponse = await db.insert(UserAnswer).values({
                mockIdRef: interviewData.mockId,
                question: question.question,
                correctAns: question.answer,
                userAns: userAnswer,
                feedback: parsedFeedback?.feedback,
                rating: parsedFeedback?.rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-YYYY'),
              });
      
              if (dbResponse) {
                toast.success('Answer recorded and feedback saved!');
                setUserAnswer('');
                setResults([]);
              }
            } catch (err) {
              console.error("Error recording answer:", err);
              toast.error('Failed to save answer. Please try again.');
            } finally {
              setLoading(false);
            }
          }
        };
      
        updateAnswer();
      }, [userAnswer, isRecording]);
      
         
      const StartStopRecording=async()=>{
        if(isRecording)
        {
          stopSpeechToText()
        }
        else{
          startSpeechToText();
        }
      }

      // const UpdateUserAnswer=async()=>{

      //   console.log(userAnswer)
      //   setLoading(true)
      //   const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
      //   ", User Answer:"+userAnswer+",Depends on question and user answer for give interview question "+
      //   " please give us rating for answer and feedback as area of improvmenet if any "+
      //   "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      //   const result=await chatSession.sendMessage(feedbackPrompt);
      //   const mockJsonResp=(result.response.text()).replace('```json','').replace('```','');
      //   const JsonFeedbackResp=JSON.parse(mockJsonResp);
      //   const resp=await db.insert(UserAnswer)
      //   .values({
      //     mockIdRef:interviewData?.mockId,
      //     question:mockInterviewQuestion[activeQuestionIndex]?.question,
      //     correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
      //     userAns:userAnswer,
      //     feedback:JsonFeedbackResp?.feedback,
      //     rating:JsonFeedbackResp?.rating,
      //     userEmail:user?.primaryEmailAddress?.emailAddress,
      //     createdAt:moment().format('DD-MM-yyyy')
      //   })

      //   if(resp)
      //   {
      //     toast('User Answer recorded successfully');
      //     setUserAnswer('');
      //     setResults([]);
      //   }
      //   setResults([]);
        
      //     setLoading(false);
      // }


  return (
    <div className='flex items-center justify-center flex-col text-white '>
        <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
            <Image src={'/webcam.png'} width={200} height={200}  alt='webcamImg'
            className='absolute'/>
            <Webcam
            mirrored={true}
            style={{
                height:500,
                width:500,
                zIndex:10,
            }}
            />
        </div>
        <Button 
        disabled={loading}
        variant="subtle" className="my-10 cursor-pointer border-neutral-700"
        onClick={StartStopRecording}
        >
            {isRecording?
            <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
                <StopCircle/>Stop Recording
            </h2>
            :
            
            <h2 className='text-primary flex gap-2 items-center'>
              <Mic/>  Record Answer</h2> }</Button>
      
     
    </div>
  )
}

export default RecordAnswerSection