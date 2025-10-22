"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowLeft, AlertTriangle } from "lucide-react";

export default function KeystoreAccess() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setStep(2);
    }
  };

  const handleAccessWallet = () => {
    console.log("Accessing wallet with file:", selectedFile?.name);
    console.log("Password:", password);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">
        {/* Header */}
        <button
          onClick={() => router.push("/connect")}
          className="absolute top-6 left-6 text-gray-400 hover:text-gray-600"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => router.push("/wallet")}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Access Wallet with Keystore File
        </h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              1
            </div>
            <div className="w-64 h-1 bg-gray-300 mx-2">
              <div
                className={`h-full ${
                  step >= 2 ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              2
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-sm text-gray-600 mb-8">
          <span className={step === 1 ? "font-semibold text-blue-600" : ""}>
            Select File
          </span>
          <span className="mx-16"></span>
          <span className={step === 2 ? "font-semibold text-blue-600" : ""}>
            Enter Password
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-sm text-gray-500 mb-2">STEP {step}.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {step === 1 ? "Select your Keystore File" : "Enter your Password"}
            </h2>
            <p className="text-gray-600 mb-6">
              {step === 1
                ? "Please select keystore file that unlocks your wallet."
                : "Enter the password for your keystore file."}
            </p>

            {step === 1 ? (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".json"
                  className="hidden"
                />
                <button
                  onClick={handleFileSelect}
                  className="w-full border-2 border-teal-500 text-teal-600 py-4 rounded-lg font-semibold hover:bg-teal-50 transition"
                >
                  Select File
                </button>
                {selectedFile && (
                  <p className="mt-4 text-sm text-gray-600">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </>
            ) : (
              <>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 focus:border-teal-500 focus:outline-none"
                />
                <button
                  onClick={handleAccessWallet}
                  disabled={!password}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Access Wallet
                </button>
              </>
            )}

            {/* Warning Box */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    NOT RECOMMENDED
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    This information is sensitive, and these options should only
                    be used in offline settings by experienced crypto users.
                  </p>
                  <a href="#" className="text-sm text-teal-600 hover:underline">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center">
            <img
              src="https://www.myetherwallet.com/img/keystore-file.cd9a1369.jpg"
              alt="Keystore illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Need help?{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}
