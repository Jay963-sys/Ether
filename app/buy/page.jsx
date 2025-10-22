"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const BuySellCryptoPage = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [amount, setAmount] = useState("300");
  const [selectedCrypto, setSelectedCrypto] = useState("ETH - ETHEREUM");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [toAddress, setToAddress] = useState("");

  const ethEquivalent = (parseFloat(amount) * 0.00024511).toFixed(8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white from-40% to-teal-300">
      <div className="container mx-auto px-12 py-16 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Section */}
          <div className="text-dark flex flex-col justify-between min-h-[600px]">
            {/* Logo */}
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  {/* MEW Logo placeholder - replace with actual logo */}
                  {/* <svg
                    className="w-8 h-8 text-teal-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg> */}
                </div>
                {/* <span className="text-3xl font-bold">MEW</span> */}
              </div>
            </div>

            {/* Heading - Centered */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Buy and Sell Crypto
              <br />
              Fast and Secure
            </h1>

            {/* Powered by Section */}
            <div>
              <p className="text-lg mb-6 opacity-90">Powered by</p>
              <div className="grid grid-cols-2 gap-0 mb-8">
                {/* MoonPay */}
                <div className=" flex items-center justify-center -m-1">
                  <img
                    src="https://ccswap.myetherwallet.com/img/icon-moonpay.f259c855.svg"
                    alt="MoonPay"
                    className="h-8"
                  />
                </div>

                {/* Simplex */}
                <div className=" flex items-center justify-center -m-1">
                  <img
                    src="https://cdn.cookielaw.org/logos/1c139e83-1398-43ea-9fc3-c8f238048bcc/50025fe4-ef14-4b13-86da-1c768fe369e3/ecb99b91-f5c0-4dd9-b603-2b7b9e2ab315/simplex_main_RGB.png"
                    alt="Simplex by Nuvei"
                    className="h-28"
                  />
                </div>

                {/* Topper */}
                <div className=" flex items-center justify-center -m-1">
                  <img
                    src="https://cdn.ixfi.com/buy-crypto-vendor/Topperpay-light.webp"
                    alt="Topper"
                    className="h-10"
                  />
                </div>

                {/* OnRamp */}
                <div className=" flex items-center justify-center -m-1">
                  <img
                    src="data:image/webp;base64,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"
                    alt="ONRAMP"
                    className="h-8"
                  />
                </div>
              </div>{" "}
              {/* Payment Methods */}
              <div className="flex items-center space-x-2">
                <span className="text-sm opacity-90">We accept</span>
                <div className="flex items-center space-x-1.5">
                  {/* Visa */}
                  <div className="p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-visa.a210c6d6.svg"
                      alt="Visa"
                      className="h-6"
                    />
                    {/* Replace with: <img src="visa-logo.svg" alt="Visa" /> */}
                  </div>

                  {/* Mastercard */}
                  <div className=" p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-master.e13b09eb.svg"
                      alt="Mastercard"
                      className="h-6"
                    />
                    {/* Replace with: <img src="mastercard-logo.svg" alt="Mastercard" /> */}
                  </div>

                  {/* Bank Transfer */}
                  <div className=" p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-bank.69ca9b2e.svg"
                      alt="Bank Transfer"
                      className="h-6"
                    />
                    {/* Replace with: <img src="bank-logo.svg" alt="Bank" /> */}
                  </div>

                  {/* PayPal */}
                  <div className=" p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-paypal-logo.0dcab9e8.svg"
                      alt="PayPal"
                      className="h-8"
                    />
                    {/* Replace with: <img src="paypal-logo.svg" alt="PayPal" /> */}
                  </div>

                  {/* Apple Pay */}
                  <div className=" p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-apple-pay.8729e08b.svg"
                      alt="Apple Pay"
                      className="h-6"
                    />
                    {/* Replace with: <img src="applepay-logo.svg" alt="Apple Pay" /> */}
                  </div>

                  {/* Google Pay */}
                  <div className="p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-google-pay-logo.4a1733d7.svg"
                      alt="Google Pay"
                      className="h-8"
                    />
                    {/* Replace with: <img src="googlepay-logo.svg" alt="Google Pay" /> */}
                  </div>

                  {/* PIX */}
                  <div className=" p-1">
                    <img
                      src="https://ccswap.myetherwallet.com/img/icon-pix-logo.a74a911c.svg"
                      alt="PIX"
                      className="h-6"
                    />
                    {/* Replace with: <img src="pix-logo.svg" alt="PIX" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg mx-auto w-full">
            {/* Tabs */}
            <div className="flex space-x-1 mb-8">
              <button
                onClick={() => setActiveTab("buy")}
                className={`px-6 py-3 text-lg font-semibold transition rounded-t-lg ${
                  activeTab === "buy"
                    ? "text-gray-900 border-b-4 border-gray-900"
                    : "text-gray-400"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`px-6 py-3 text-lg font-semibold transition rounded-t-lg ${
                  activeTab === "sell"
                    ? "text-gray-900 border-b-4 border-gray-900"
                    : "text-gray-400"
                }`}
              >
                Sell
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* I want to Buy */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I want to Buy
                </label>
                <div className="relative">
                  <button className="w-full border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between hover:border-gray-400 transition">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <span className="font-medium">{selectedCrypto}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">Network: Ethereum</p>
              </div>

              {/* I am spending */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I am spending
                </label>
                <div className="flex space-x-3">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button className="border border-gray-300 rounded-lg px-4 py-3 flex items-center space-x-2 hover:border-gray-400 transition min-w-[120px]">
                    <img
                      src="/api/placeholder/24/24"
                      alt="USD"
                      className="w-6 h-6 rounded-full"
                    />
                    {/* Replace with: <img src="us-flag.svg" alt="USD" /> */}
                    <span className="font-medium">{selectedCurrency}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  ~{ethEquivalent} ETH
                </p>
              </div>

              {/* Where should we send your crypto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where should we send your crypto?
                </label>
                <input
                  type="text"
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  placeholder="To Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
                />
              </div>

              {/* Preview Quotes Button */}
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-full transition shadow-lg">
                PREVIEW QUOTES
              </button>
            </div>
          </div>
        </div>

        {/* Increased Buy Limits Section */}
        <div className="mt-32 mb-20">
          <p className="text-[1.5rem] md:text-[2.0rem] font-bold mb-4">
            Increased buy limits
            <br />
            so you can do more with crypto
          </p>
          {/* <p className="text-[2.4rem] md:text-[2.4rem] font-bold mb-12">
            so you can do more with crypto
          </p> */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500">
              <h3 className="text-3xl font-bold text-teal-600 mb-3">
                $50 to $20,000
              </h3>
              <p className="text-lg text-gray-700">
                For your first transaction
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500">
              <h3 className="text-3xl font-bold text-teal-600 mb-3">
                Up to $20,000
              </h3>
              <p className="text-lg text-gray-700">Daily limit</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500">
              <h3 className="text-3xl font-bold text-teal-600 mb-3">
                Up to $50,000
              </h3>
              <p className="text-lg text-gray-700">Monthly limit</p>
            </div>
          </div>
        </div>

        {/* Why Millions Choose Us Section */}
      </div>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900  p-12 md:p-16 ">
        <h2 className=" text-2xl md:text-4xl font-semibold text-white mb-16 ">
          Why millions of users choose us
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Low fees */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="7"
                    width="20"
                    height="14"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path d="M16 3v4M8 3v4M2 11h20" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Low fees</h3>
              <p className="text-gray-400 text-lg">
                Get the most crypto for your fiat with limited fees from the
                provider and MEW
              </p>
            </div>
          </div>

          {/* Quick transactions */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Quick transactions
              </h3>
              <p className="text-gray-400 text-lg">
                Get crypto in your wallet in minutes
              </p>
            </div>
          </div>

          {/* Easy verification */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Easy verification
              </h3>
              <p className="text-gray-400 text-lg">
                Payment is processed in a few short steps
              </p>
            </div>
          </div>

          {/* Human support */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="17"
                    r="0.5"
                    fill="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Human support
              </h3>
              <p className="text-gray-400 text-lg">
                Reach out to support@enkrypt.com with any questions
              </p>
            </div>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="mt-16 flex justify-center">
          <button className="bg-white hover:bg-gray-100 text-teal-600 font-bold text-lg px-20 py-5 rounded-full transition shadow-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySellCryptoPage;
