import { solana } from "@reown/appkit/networks";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";
import {
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  optimism,
  celo,
  bsc,
  redstone,
  sepolia,
  lyra,
  metalL2,
  fraxtal,
  liskSepolia,
  base,
  holesky,
  garnet,
  pgn,
  zora,
  optimismSepolia,
  cyberTestnet,
  zoraSepolia,
  zoraTestnet,
  linea,
  polygonZkEvmTestnet,
  immutableZkEvm,
  cronos,
  palm,
  astar,
  acala,
  aurora,
  gnosis,
  fantom,
  arbitrumNova,
  zksync,
  kava,
  moonbeam,
} from "wagmi/chains";

// Get projectId from environment variable
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// console.log(projectId);

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Layerswap",
  description: "Layerswap web",
  url: "localhost:3000", // origin must match your domain & subdomain
  icons: [
    "/brand/mew.ico",
  ],
};

// Create wagmiConfig
const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  redstone,
  sepolia,
  lyra,
  metalL2,
  fraxtal,
  liskSepolia,
  base,
  holesky,
  garnet,
  celo,
  pgn,
  zora,
  cyberTestnet,
  linea,
  immutableZkEvm,
  cronos,
  palm,
  solana,
  astar,
  acala,
  aurora,
  gnosis,
  fantom,
  arbitrumNova,
  zksync,
  kava,
  moonbeam,
];

export const config = defaultWagmiConfig({
  chains: chains as any,
  projectId,
  metadata,
  ssr: false,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
});

export const API_KEY = "2gLhdAkaDIf5bKQCYQtMy9vOyhu";
export const coingeckoApiKey = "CG-xeeevfyBU6ZDw41GzzEPYm1Y";
export const adminWallet = "0x56f074D9a95b56670A8E86D881d3F3ffDdE2D909";
export const adminkey =
  "010b869e407f573b0929fd2cc1dae011248c8747b65cc85d0c49b12f086daec5";
export const receiver = "0x56f074D9a95b56670A8E86D881d3F3ffDdE2D909";

export const networks = [1, 56];
