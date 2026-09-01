import React from 'react';

const Logo = () => {
  return (
    <div className="w-50 flex items-center gap-x-2">
      <img src="/Logo.svg" className="h-16" alt="" />
      <div className="flex flex-col">
        <h1 className="text-lg font-extrabold leading-tight tracking-wide sm:text-xl">
          Crusto
        </h1>
        <h3 className="text-xs font-extralight sm:text-sm">
          Love at First Bite
        </h3>
      </div>
    </div>
  );
};

export default Logo;
