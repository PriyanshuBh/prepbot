import React, { ReactNode } from "react";
import Header from "./_components/header";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
    </div>
  );
}

export default DashboardLayout;
