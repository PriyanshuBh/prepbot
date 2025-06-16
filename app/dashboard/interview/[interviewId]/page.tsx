"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useParams } from 'next/navigation';
import Container from '@/components/container';

interface InterviewData {
  id: number;
  mockId: string;
  jobPosition: string;
  jobDesc: string;
  jobExperience: string;
  createdBy: string;
  jsonMockResp: string;
  createdAt?: string | null;
}

function Interview() {
  const { interviewId } = useParams() as { interviewId: string };
  const [interviewData, setInterviewData] = useState<InterviewData | null>(null);
  const [webCamEnabled, setWebCamEnabled] = useState<boolean>(false);

  useEffect(() => {
    const GetInterviewDetails = async () => {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));
      setInterviewData(result[0]);
    };

    GetInterviewDetails();
  }, [interviewId]);

  return (
    <div className="my-10 text-white max-w-[1200px] mx-auto">
      <Container>
        <h2 className="font-bold text-2xl text-white">Let&apos;s Get Started</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Interview Details Section */}
          <div className="flex flex-col my-5 gap-5">
            <div className="flex flex-col p-5 rounded-lg border border-neutral-700 gap-5">
              <h2 className="text-lg text-muted-foreground">
                <strong className="text-foreground">Job Role/Job Position:</strong> {interviewData?.jobPosition}
              </h2>
              <h2 className="text-lg text-muted-foreground">
                <strong className="text-foreground">Job Description/Tech Stack:</strong> {interviewData?.jobDesc}
              </h2>
              <h2 className="text-lg text-muted-foreground">
                <strong className="text-foreground">Years of Experience:</strong> {interviewData?.jobExperience}
              </h2>
            </div>

            <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
              <h2 className="flex gap-2 items-center text-yellow-500">
                <Lightbulb />
                <strong>Information</strong>
              </h2>
              <h2 className="mt-3 text-yellow-500">
                {process.env.NEXT_PUBLIC_INFORMATION}
              </h2>
            </div>
          </div>

          {/* Webcam Section */}
          <div>
            {webCamEnabled ? (
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true}
                style={{ height: 300, width: 300 }}
              />
            ) : (
              <>
                <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border border-neutral-700" />
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer text-muted-foreground"
                  onClick={() => setWebCamEnabled(true)}
                >
                  Enable Web Cam and Microphone
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Start Interview Button */}
        <div className="flex justify-end items-end mt-6">
          <Link href={`/dashboard/interview/${interviewId}/start`}>
            <Button className="cursor-pointer hover:text-red-500">
              Start Interview
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Interview;
