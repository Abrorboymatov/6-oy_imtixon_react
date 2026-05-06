import React from 'react';

export default function CTA() {
  return (
    <div className="p-[96px] bg-[#666DFF] mx-[30px] md:mx-[140px] ">
      
      <div className="relative p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        


        
        <div className="text-[#FFFFFF] z-10 space-y-2">
          <p className="text-[14px] uppercase">
            Newsletter
          </p>
          <h2 className="text-[24px] md:text-[36px] max-w-md">
            Subscribe our News Letter to get Latest Updates.
          </h2>
        </div>


        <div className="mt-8 md:mt-0 w-full md:w-auto z-10">
          <input
            type="text"
            placeholder="Paresh@Pixeto.com"
            className="w-full md:w-96 p-4 text-[24px] text-[#232536] bg-[#FFFFFF] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
