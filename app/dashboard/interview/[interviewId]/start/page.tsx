"use client";

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState, useCallback } from 'react';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Container from '@/components/container';

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

type Question = {
  question: string;
  answer: string;
};

const StartInterview = () => {
  const { interviewId } = useParams() as { interviewId: string };
  const [interviewData, setInterviewData] = useState<InterviewData | null>(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState<Question[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const getInterviewDetails = useCallback(async () => {
    if (!interviewId) return;

    try {
      const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));

      if (!result || result.length === 0) {
        console.warn("No interview data found.");
        return;
      }

      let raw = result[0].jsonMockResp?.trim() || "";

      // Remove ```json and ``` if present
      raw = raw.replace(/```json/g, "").replace(/```/g, "").trim();

      const jsonMockResp = JSON.parse(raw);
      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(result[0]);
    } catch (err) {
      console.error("Failed to fetch or parse interview data:", err);
    }
  }, [interviewId]);

  useEffect(() => {
    getInterviewDetails();
  }, [getInterviewDetails]);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-[80%]'>
        {/* Questions */}
        <Container>
          <QuestionsSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
        </Container>

        {/* Video/Audio Recording */}
        <Container delay={0.1}>
          {interviewData && (
            <RecordAnswerSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
              interviewData={interviewData}
            />
          )}
        </Container>
      </div>

      {/* Navigation Buttons */}
      <Container delay={0.2}>
        <div className='h-[20%] flex my-4 text-white justify-end gap-6'>
          {activeQuestionIndex > 0 && (
            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
              Previous Question
            </Button>
          )}
          {activeQuestionIndex !== mockInterviewQuestion.length - 1 && (
            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
              Next Question
            </Button>
          )}
          {activeQuestionIndex === mockInterviewQuestion.length - 1 && (
            <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
              <Button>End Interview</Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StartInterview;
