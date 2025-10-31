"use client";

import { useEffect, useState } from "react";

const ErrorScreen = () => {
  const [siteName, setSiteName] = useState("");
  const [checkNetworkOpen, setcheckNetworkOpen] = useState(false);

  const handleTogglCheckNetwork = () => {
    setcheckNetworkOpen((prev) => !prev);
  };

  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = window.location.hostname;
      setSiteName(name);
    }
  }, []);

  return (
    <div className="min-h-screen h-screen overflow-y-auto overflow-x-hidden bg-[#202124] py-24">
      <div className="flex flex-col justify-start items-center w-full max-w-2xl mx-auto text-[#9AA0A6] px-4 sm:px-0 md:pl-10">
        <div className="w-full">
          <div className="icon icon-generic"></div>

          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
            This site can’t be reached
          </h1>
          <p className="mt-4 text-[15px]">
            <b>{siteName}</b> took too long to respond.
          </p>

          <p className="mt-3">Try:</p>

          <ul className="w-full text-sm lg:text-[15px] space-y-2 list-disc pl-4 sm:pl-10 mt-2">
            <li role="button" className="">
              Checking the connection Checking the connection
            </li>
            <li className="text-[#8ABFF8]" role="button">
              Checking the proxy, firewall, and DNS configuration
            </li>
            <li className="text-[#8ABFF8]" role="button">
              Running Windows Network Diagnostics
            </li>
          </ul>

          <p className="text-xs mt-5">ERR_NAME_NOT_RESOLVED</p>

          <div className="flex justify-between items-center gap-4 w-full mt-14">
            <button
              onClick={handleReload}
              className="bg-[#8ABFF8] text-[#202124] rounded-full px-5 py-1.5 text-sm"
            >
              Reload
            </button>
            <button
              onClick={handleTogglCheckNetwork}
              className="text-[#8ABFF8] border-[#80868b] hover:bg-[#303339] border rounded-full px-5 py-1.5 text-sm"
            >
              {checkNetworkOpen ? "Hide Details" : "Details"}
            </button>
          </div>

          {checkNetworkOpen ? (
            <div className="mt-10 space-y-4 w-full">
              <div className="">
                <h2 className="font-semibold text-[16px]">
                  Check your Internet connection
                </h2>

                <p className="font-light">
                  Check any cables and reboot any routers, modems, or other
                  network devices you may be using.
                </p>
              </div>

              <div className="">
                <h2 className="font-semibold text-[16px]">
                  Allow Chrome to access the network in your firewall or
                  antivirus settings.
                </h2>

                <p className="font-light">
                  If it is already listed as a program allowed to access the
                  network, try removing it from the list and adding it again.
                </p>
              </div>

              <div className="">
                <h2 className="font-semibold text-[16px]">
                  If you use a proxy server…
                </h2>

                <p className="font-light">
                  Go to the Chrome menu {">"} Settings {">"} Show advanced
                  settings… {">"}
                  Change proxy settings… {">"} LAN Settings and deselect "Use a
                  proxy server for your LAN".
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
