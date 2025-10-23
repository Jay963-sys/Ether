export default function InfoPage() {
  return (
    <div className="min-h-screen bg-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">EtherWallet</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Customers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">EN</span>
              <button className="text-gray-600 hover:text-gray-900">Log In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Build your crypto business with EtherWallet
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Embark On A Transformative Journey To Build Your Crypto Business With EtherWallet! Our Cutting Edge Platform Is Designed To Empower!
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Get Started
                </button>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50">
                  Explore
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Bitcoin</span>
                    <span className="text-sm font-bold text-gray-900">$43,250.00</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Ethereum</span>
                    <span className="text-sm font-bold text-gray-900">$3,883.20</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">TetherUS</span>
                    <span className="text-sm font-bold text-gray-900">$1.00</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Polygon</span>
                    <span className="text-sm font-bold text-gray-900">$0.89</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">BNB</span>
                    <span className="text-sm font-bold text-gray-900">$315.45</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-green-800 mb-8">Join over 10K customers worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-gray-600 font-semibold">pipedrive</span>
            <span className="text-gray-600 font-semibold">UNISWAP</span>
            <span className="text-gray-600 font-semibold">coinbase</span>
            <span className="text-gray-600 font-semibold">COIN360</span>
            <span className="text-gray-600 font-semibold">CoinMarketCap</span>
          </div>
        </div>
      </section>

      {/* Earning Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Earn up to $10 worth of crypto in EtherWallet
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Unlock the potential of crypto earnings with our exclusive offer! Earn up to $10 worth of cryptocurrency effortlessly.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Start Earning
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Earn 25.010 BTC</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Earn 0.002 ETH</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Earn 10 USDT</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Earn 11.2 MATIC</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Earn 0.03 BNB</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The best crypto features you won`&apos;`t find anywhere else
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Trusted & Secure */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted & Secure</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Does EtherWallet generate your private keys locally, or on our servers?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    EtherWallet generates your private keys locally on your device, ensuring maximum security and control.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Do you offer two-factor authentication?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we provide multiple security layers including 2FA, hardware wallet support, and biometric authentication.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Illustrations */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Trusted Platform */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The most trusted cryptocurrency Platform
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Most Trusted Cryptocurrency Platform</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safeguarding Your Assets through Robust Security</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⛓️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3.0 Crypto</h3>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protected Assets</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your digital assets are protected by industry-leading security measures, including multi-signature wallets, 
              hardware security modules, and regular security audits by top-tier firms.
            </p>
          </div>
        </div>
      </section>

      {/* Control & Analytics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Take Control of Your Choices and Wealth
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Reports</h3>
              <p className="text-gray-600 mb-6">
                Unlock Insights, and Drive Informed Decisions with comprehensive analytics and reporting tools.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Asset performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Portfolio insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Trading Volume</span>
                  <div className="w-32 h-2 bg-gray-200 rounded">
                    <div className="w-24 h-2 bg-blue-500 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Portfolio Growth</span>
                  <div className="w-32 h-2 bg-gray-200 rounded">
                    <div className="w-28 h-2 bg-green-500 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Security Score</span>
                  <div className="w-32 h-2 bg-gray-200 rounded">
                    <div className="w-30 h-2 bg-purple-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our statistics over the years
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Digital Assets</h3>
                  <p className="text-4xl font-bold text-blue-400">500+</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Transaction</h3>
                  <p className="text-4xl font-bold text-green-400">1M+</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Customer</h3>
                  <p className="text-4xl font-bold text-purple-400">10K+</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-bold mb-4">$20BN+</h3>
              <p className="text-xl">Transaction processed</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEW Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Powered by MyEtherWallet Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enkrypt Wallet</h3>
              <p className="text-gray-600">
                Multichain browser wallet supporting nearly 100 networks including Ethereum, Polygon, and Polkadot ecosystem.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MEW Universe</h3>
              <p className="text-gray-600">
                Collect daily Energy points and earn unique Peggy NFTs through our engaging reward program.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Onboarding</h3>
              <p className="text-gray-600">
                Multiple crypto purchasing options including MoonPay, Coinbase Pay, and Topper by Uphold.
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Years of Security</h3>
              <p className="text-gray-600">
                Celebrating a decade of innovation in the Ethereum ecosystem with proven security and reliability.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Excellence</h3>
              <p className="text-gray-600">
                Official wallet for ETH Denver 2023, providing seamless mobile crypto experiences.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Serving users worldwide with localized features and multi-language support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold">EtherWallet</span>
              </div>
              <p className="text-gray-400">
                Building the future of cryptocurrency with secure, user-friendly solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Wallet</a></li>
                <li><a href="#" className="hover:text-white">Trading</a></li>
                <li><a href="#" className="hover:text-white">Staking</a></li>
                <li><a href="#" className="hover:text-white">DeFi</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Telegram</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EtherWallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
