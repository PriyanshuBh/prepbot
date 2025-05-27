
import React from "react";
import AddNewInterview from "./_components/add-new-interview";
import InterviewList from "./_components/interview-list";
import Container from "@/components/container";

function Dashboard() {
  return (
    <div className="p-10 text-white">
      <Container>
        <h2 className="font-bold text-3xl text-primary">Dashboard</h2>
        <h2 className="text-gray-500">
          Create and Start your AI Mockup Interview
        </h2>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5">
        <Container delay={0.1}>
          <AddNewInterview />
        </Container>
      </div>

      {/* Previous Interview List  */}
      <Container delay={0.2}>
        <InterviewList />
      </Container>
    </div>
  );
}

export default Dashboard;
