// import IzumiLogo from "../components/global/IzumiLogo";
// import iZumiText from "../../images/izumi/izi.svg";
export default function InfoPage() {
  return (
    <div className="min-h-screen h-full bg-[#3F2D60] text-white flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-[#120F29] rounded-2xl shadow-lg p-8">
        {/* Header */}
        <header className="flex flex-col items-center mb-8">
          <img
            // src={iZumiText}
            alt="MEW "
            width={70}
            height={70}
            className="rounded-2xl mb-4"
          />
          <h1 className="text-4xl font-bold font-mono mb-2 text-center">
            MEW : The Future of Cross-Chain Swaps
          </h1>
          <p className="text-lg text-gray-200 text-center max-w-2xl">
            MEW is a next-generation cross-chain bridge and interchain swap
            protocol, enabling seamless asset transfers and swaps across EVM and
            non-EVM networks. Discover how MEW is revolutionizing DeFi
            interoperability.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-100">
            In the rapidly evolving world of MEWralized finance (DeFi),
            interoperability between blockchains is crucial. MEW addresses
            this challenge by providing a unified platform for cross-chain
            swaps, allowing users to move assets freely and efficiently between
            different blockchain ecosystems.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How MEW Works</h2>
          <p className="text-gray-100 mb-2">
            MEW leverages advanced smart contracts and liquidity aggregation
            to facilitate cross-chain swaps. Here's how it works:
          </p>
          <ul className="list-disc list-inside text-gray-100 ml-4">
            <li>Users initiate a swap on the MEW platform.</li>
            <li>
              MEW aggregates liquidity from multiple MEWralized exchanges
              (DEXs) across supported networks.
            </li>
            <li>
              Smart contracts handle the asset transfer, ensuring security and
              transparency.
            </li>
            <li>
              Assets are delivered to the user on the destination chain, often
              within minutes.
            </li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-100 ml-4">
            <li>
              <span className="font-semibold">True Cross-Chain Swaps:</span>{" "}
              Move assets between EVM and non-EVM chains without intermediaries.
            </li>
            <li>
              <span className="font-semibold">Aggregated Liquidity:</span> Get
              the best rates by tapping into multiple DEXs and liquidity pools.
            </li>
            <li>
              <span className="font-semibold">User-Friendly Interface:</span>{" "}
              Intuitive design for both beginners and advanced users.
            </li>
            <li>
              <span className="font-semibold">Fast Settlement:</span> Most swaps
              are completed in minutes.
            </li>
            <li>
              <span className="font-semibold">MEWralized & Secure:</span> All
              swaps are handled by audited smart contracts.
            </li>
          </ul>
        </section>

        {/* Supported Networks */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Supported Networks</h2>
          <p className="text-gray-100 mb-2">
            MEW supports a wide range of blockchains, including but not
            limited to:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Ethereum
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              BNB Chain
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Polygon
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              Avalanche
            </span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
              Arbitrum
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              Optimism
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              Fantom
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Cronos
            </span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
              Sei
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              Blast
            </span>
            <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm">
              Base
            </span>
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">
              And more...
            </span>
          </div>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Security</h2>
          <p className="text-gray-100">
            Security is a top priority for MEW . All smart contracts are
            thoroughly audited by leading security firms. The platform is
            non-custodial, meaning users always retain control of their assets.
            Regular security updates and bug bounties help ensure the safety of
            user funds.
          </p>
        </section>

        {/* Getting Started */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <ol className="list-decimal list-inside text-gray-100 ml-4">
            <li>Connect your wallet (MetaMask, WalletConnect, etc.).</li>
            <li>Select the source and destination chains.</li>
            <li>Choose the asset and amount to swap.</li>
            <li>Review the details and confirm the transaction.</li>
            <li>Track your swap status in the Explorer.</li>
          </ol>
        </section>

        {/* Call to Action */}
        {/* <section className="mt-10 flex flex-col items-center">
          <a
            href="/"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors text-lg shadow-md"
          >
            Go to MEW  App
          </a>
        </section> */}
      </div>
    </div>
  );
}
