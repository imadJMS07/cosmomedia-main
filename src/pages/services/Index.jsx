import React from "react";
import PageTitle from "@/components/PageTitle";
import Services from "./components/Services";

const Index = () => {
  return (
    <>
      <PageTitle 
        title="Our Services" 
        bg="/images/services/services.webp"
      />
      <div className="bg-[#050505] min-h-[calc(100vh-60vh)]">
        <div className="relative h-full">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #00F5CC 0%, transparent 50%),
                radial-gradient(circle at 0% 0%, #00D5AC 0%, transparent 30%),
                radial-gradient(circle at 100% 100%, #3451B2 0%, transparent 40%)`,
            }}
          />
          <div className="relative z-10">
            <Services />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index; 