import React from "react";
import { Appbar } from "../_components/Appbar";
import Sidebar from "../_components/Sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Appbar />
        {children}
      </div>
    </div>
  );
};

export default SiteLayout;
