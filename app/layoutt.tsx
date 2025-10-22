import type { Metadata } from "next";
import localFont from "next/font/local";
import WagmiRainbowKitProvider from "../components/providers/WagmiRainbowKitProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
// import ReffererProvider from "@/components/providers/ReffererProvider";
// import useAccessRestriction from "@/hooks/useAccessRestriction";
// import AccessRestrictionProvider from "@/components/providers/AccessRestrictionProvider";
import Script from "next/script";
import { Inter } from "next/font/google";
import LayoutClientWrapper from "@/components/global/LayoutClientWrapper";
import FooterWrapper from "@/components/global/FooterWrapper";
import { Toaster } from "react-hot-toast";

import EtherwalletProvider from "@/components/providers/EtherwalletProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "500",
});
const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff",
  variable: "--font-satoshi",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500",
});

const inter = Inter({
  display: "swap",
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Etherwallet",
  description:
    "::Etherwallet is a cross-chain bridge and interchain swap communication protocol that aggregates decentralized exchange liquidity across EVM and non-EVM networks",
  icons: "/brand/mew.ico",
  keywords: "etherwallet finance , etherwallet bridge , etherwallet swap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useAccessRestriction();

  return (
    <html lang="en">
      <LayoutClientWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${inter.variable} antialiased`}
        >
          {/* <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-CCRHDLDT.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-JGX5SPIS.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-A3IIQ6X3.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-HZL4YIMB.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/3axiYQbspwEXA-UQA7bnGFiL_U_7_yLDNcWI9gFZMWQ.OHWSQFZA.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-3GKZW6GO.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-J4M2TFHF.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-6Q4E7J6T.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-UXAKGVOX.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-ZE2V2QVZ.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-DS4MKEO4.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-QOHQBW4I.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-KR7L7JOM.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-7BMBPZOI.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-DIFWFQFJ.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-PZNDTLNS.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-G4EOUQC5.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-J4URS2OM.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-P5MMYVGL.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-JQNVCEQC.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-5ML35RM3.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/chunk-42U43NKG.mjs"
      />
      <Script
        rel="modulepreload"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/script_main.2XTSQG63.mjs"
      />

      <Script
        type="module"
        data-framer-bundle="main"
        src="https://framerusercontent.com/sites/70p2PXhW4yalsYxgYZn1gZ/script_main.2XTSQG63.mjs"
      /> */}

          <WagmiRainbowKitProvider>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              theme="colored"
            />
            {/* <EtherwalletProvider> */}

            <div className="pt-50">{children}</div>
            <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
            <FooterWrapper />

            {/* </EtherwalletProvider> */}
          </WagmiRainbowKitProvider>
        </body>
      </LayoutClientWrapper>
    </html>
  );
}
