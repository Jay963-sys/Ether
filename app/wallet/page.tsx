"use client";

import WalletAccess from "./_components/WalletAccess";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md mx-auto"></div>
      <WalletAccess />
    </div>
  );
};

export default Page;
