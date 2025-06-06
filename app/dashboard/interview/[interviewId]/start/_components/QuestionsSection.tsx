
import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

type Question = {
  question: string;
};

interface QuestionsSectionProps {
  mockInterviewQuestion: Question[];
  activeQuestionIndex: number;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  mockInterviewQuestion,
  activeQuestionIndex,
}) => {
  const textToSpeach = (text?: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window)  {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text to speech");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border border-neutral-700 rounded-lg my-10 text-foreground ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                key={index}
                className={`p-2 border rounded-full
                text-xs md:text-sm text-center cursor-pointer text-muted-foreground
                ${activeQuestionIndex == index && "bg-primary !text-white"}`}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />

        <div className="border  rounded-lg p-5 bg-blue-100 mt-20 ">
          <h2 className="flex gap-2 items-center  !text-black">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-primary my-2">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
