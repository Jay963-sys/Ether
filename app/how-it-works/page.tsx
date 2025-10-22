"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowDownUp,
  Send,
  Wallet,
  Code,
  MessageSquare,
  CreditCard,
  ChevronDown,
} from "lucide-react";

interface Token {
  symbol: string;
  name: string;
  balance?: string;
}

interface Provider {
  rate: string;
  name: string;
  badge: boolean;
}

interface TokenInfo {
  symbol: string;
  price: string;
  marketCap: string;
  change: string;
  balance: string;
  positive: boolean;
}

interface DApp {
  name: string;
  category: string;
}

const SwapPage = () => {
  const [fromToken, setFromToken] = useState({
    symbol: "ETH",
    name: "Ethereum",
  });
  const [toToken, setToToken] = useState({ symbol: "DAI", name: "Dai" });
  const [fromAmount, setFromAmount] = useState("1");
  const [toAmount, setToAmount] = useState("1,488.34567890");

  const providers = [
    { rate: "1,488.34567890", name: "Best Rate", badge: true },
    { rate: "1,478.74297952", name: "", badge: false },
    { rate: "1,465.25883214", name: "", badge: false },
  ];

  const tokens = [
    {
      symbol: "USDT",
      price: "$1.00",
      marketCap: "$40.3B",
      change: "0.23%",
      balance: "99.12 USDT",
      positive: true,
    },
    {
      symbol: "UNI",
      price: "$28.21",
      marketCap: "$14.7B",
      change: "2.14%",
      balance: "200.23 UNI",
      positive: false,
    },
    {
      symbol: "LINK",
      price: "$27.31",
      marketCap: "$11.3B",
      change: "3.21%",
      balance: "42.68 LINK",
      positive: true,
    },
    {
      symbol: "USDC",
      price: "$1.00",
      marketCap: "$10.5B",
      change: "2.12%",
      balance: "3401.21 USDC",
      positive: false,
    },
  ];

  const dapps = [
    { name: "Stake on ETH 2.0", category: "DeFi" },
    { name: "ENS Manager", category: "Identity" },
    { name: "AAVE", category: "Explore DeFi" },
    { name: "MakerDAO", category: "Explore DeFi" },
    { name: "Solidproof transaction", category: "Utilities" },
    { name: "Gitcoin Migrator", category: "Utilities" },
    { name: "LEND Migrator", category: "Explore DeFi" },
    { name: "Unstoppable Domain", category: "Naming tools" },
    { name: "Ambirpay", category: "utilities" },
  ];
  function WalletButton({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-white text-[15px] font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        {children}
      </Link>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* How it works Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">How it works</h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <br />
        <br />
        <h2 className="text-3xl font-bold mb-4">
          Your Gateway to the Ethereum Blockchain
        </h2>
      </div>

      {/* Send ETH Section */}
      <section id="nft" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Send ETH, ERC20 tokens & NFT
          </h2>
          <p className="text-gray-600 mb-12">
            Send your funds with the press of a button.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div className="grid gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  <Send className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Send Transactions</h3>
                  <p className="text-gray-600">
                    MEW gives you full control-send your funds to anyone,
                    anywhere, at any time, without middlemen, minimums, or
                    limits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  <Wallet className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">NFT Manager</h3>
                  <p className="text-gray-600">
                    View and manage all of your collectibles and domains in
                    MEW's NFT Manager.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  <ArrowDownUp className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Work with other chains
                  </h3>
                  <p className="text-gray-600">
                    MEW supports additional Ethereum-compatible networks
                    including Ethereum Classic (ETC), Binance Smart Chain (BNB)
                    and Polygon, so that users can manage assets beyond the
                    Ethereum mainnet.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://www.myetherwallet.com/img/send-tx-page.4b941247.jpg"
                alt="Send Transaction Interface"
                className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Swap Section */}
      <section
        id="swap"
        className="py-16 bg-gradient-to-r from-orange-400 to-orange-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative flex justify-center">
              {/* Background - Bigger */}
              <img
                src="https://www.myetherwallet.com/img/bg-bubbles.581517c8.png"
                alt="Background"
                className="w-full max-w-3xl h-auto"
              />

              {/* Swap Interface - Smaller, on top */}
              <img
                src="https://www.myetherwallet.com/img/swap-page.918893f1.png"
                alt="Swap Interface"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Swap</h2>
              <p className="text-lg mb-8">
                MEW has partnered with 1inch, DEX AG, Changelly, Bity, and
                Simplex for easy crypto purchases and swaps. Buy ETH right in
                the wallet, swap ETH for ERC20 tokens, BTC and more!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <ArrowDownUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Cross-Chain Swaps
                    </h3>
                    <p className="opacity-90">
                      MEW offers cross-chain swaps for a variety of popular
                      coins. Swap between Ether and Bitcoin, Litecoin, or even
                      DOGE!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Competitive Rates
                    </h3>
                    <p className="opacity-90">
                      MEW works with decentralized exchange aggregators 1inch
                      and DEX AG to find the best price on your token swap. This
                      way you don't have to deal with multiple platforms to get
                      the best rate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Cash Out to Fiat</h3>
                    <p className="opacity-90">
                      Our partner Bity allows anyone to cash out their Ether for
                      Euros or Swiss Francs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DApps Section */}
      <section id="dapps" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">DApps</h2>
          <p className="text-gray-600 mb-12">
            Decentralized Applications (DApps) are what makes Ethereum special.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div className="grid gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  <Send className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">DApps Center</h3>
                  <p className="text-gray-600">
                    Explore our integrated DApps to fully experience Ethereum’s
                    capabilities. Take advantage of DeFi services with our
                    partners Aave and MakerDAO, and register a domain name for
                    your wallet through ENS or Unstoppable Domains. We are
                    constantly adding more DApps!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  <Wallet className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Submit Your Own DApp!
                  </h3>
                  <p className="text-gray-600">
                    MEW is dedicated to being decentralized and open-source, so
                    we are excited about working with DApp developers and making
                    DApp integrations easy. You can fill out your details
                    through our DApp Submit Form.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://www.myetherwallet.com/img/new-dapps-page.7b4b22d1.jpg"
                alt="Send Transaction Interface"
                className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokens Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">Tokens</h2>
          <p className="text-white text-lg mb-8">
            If it is on Ethereum, you can manage it with MEW.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-600">MY TOKENS VALUE</p>
                  <p className="text-3xl font-bold">$3,212.23</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-600 border-b">
                      <th className="pb-3">TOKEN</th>
                      <th className="pb-3">PRICE</th>
                      <th className="pb-3">MARKET CAP</th>
                      <th className="pb-3">24H CHANGES</th>
                      <th className="pb-3">BALANCE</th>
                      <th className="pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokens.map((token, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <span className="font-semibold">
                              {token.symbol}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">{token.price}</td>
                        <td className="py-4">{token.marketCap}</td>
                        <td className="py-4">
                          <span
                            className={
                              token.positive ? "text-green-600" : "text-red-600"
                            }
                          >
                            {token.change} {token.positive ? "▲" : "▼"}
                          </span>
                        </td>
                        <td className="py-4 text-sm text-gray-600">
                          {token.balance}
                        </td>
                        <td className="py-4">
                          <button className="bg-teal-500 text-white text-sm px-4 py-1 rounded hover:bg-teal-600">
                            Trade
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-white">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Buy Tokens</h3>
                    <p className="opacity-90">
                      Swap for ERC20 tokens and stablecoins through our
                      decentralized providers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Custom Tokens</h3>
                    <p className="opacity-90">
                      MEW automatically supports most ERC20 tokens through our
                      API, but if you don't see the token you're looking for,
                      you can add it as a custom token right in the interface!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">More tools</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Code className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Smart Contracts</h3>
              <p className="text-gray-600">
                Interact with any smart contract on Ethereum, whether we've
                integrated it or not!
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Messages</h3>
              <p className="text-gray-600">
                Send or verify messages from the MEW interface to verify
                ownership of your wallet.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Buy ETH</h3>
              <p className="text-gray-600">
                Purchase Ether with a credit card through our providers
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to explore Ethereum?
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-black px-4 py-2 rounded-lg">
                <span className="text-sm">Download on the App Store</span>
              </div>
              <div className="bg-black px-4 py-2 rounded-lg">
                <span className="text-sm">Get it on Google Play</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition font-semibold">
                Create a new wallet
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition font-semibold">
                Access my wallet
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwapPage;
