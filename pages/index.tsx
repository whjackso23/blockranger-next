import React, { useCallback, useEffect, useState } from "react";
import { formatEther } from "@ethersproject/units";
import type { BigNumber } from "@ethersproject/bignumber";
import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import type { AddEthereumChainParameter } from "@web3-react/types";
import type { Web3ReactHooks } from "@web3-react/core";
import { Network } from "@web3-react/network";
import { MetaMaskCard } from "../components/MetaMaskCard";

import { ConnectWithSelect } from "../components/ConnectWithSelect";
import { CHAINS } from "../constants/chains";

export default function Home() {
  return <App />;
}

function App() {
  return (
    <div
      style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
    >
      <MetaMaskCard />
    </div>
  );
}

// function App() {
//   const { active, account, activate, chainId, library } = useWeb3React();
//   const balance = useBalance();
//   const blockNumber = useBlockNumber();

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16 text-gray-100">
//           {active ? (
//             <>
//               <div>
//                 {chainId === 1 ? "Mainnet" : "Testnet"} ({blockNumber})
//               </div>
//               <div>
//                 {account.substr(0, 8)}...{account.substr(-8, 8)}
//               </div>
//               <div>{balance}</div>
//               <button
//                 className="h-10 px-5 border border-gray-400 rounded-md"
//                 onClick={async () => {
//                   const message = `Logging in at ${new Date().toISOString()}`;
//                   const signature = await library
//                     .getSigner(account)
//                     .signMessage(message)
//                     .catch((error) => console.error(error));
//                   console.log({ message, account, signature });
//                 }}
//               >
//                 Sign In
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 className="h-10 px-5 border border-gray-400 rounded-md"
//                 onClick={() => {
//                   console.log("OOGA");
//                   // activate(new InjectedConnector({}));
//                 }}
//               >
//                 Connect
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// function useBalance() {
//   const { account, library } = useWeb3React();
//   const [balance, setBalance] = useState();

//   useEffect(() => {
//     if (account) {
//       library.getBalance(account).then((val) => setBalance(val));
//     }
//   }, [account, library]);

//   return balance ? `${formatEther(balance)} ETH` : null;
// }

// function useBlockNumber() {
//   const { library } = useWeb3React();
//   const [blockNumber, setBlockNumber] = useState();

//   useEffect(() => {
//     if (library) {
//       const updateBlockNumber = (val) => setBlockNumber(val);
//       library.on("block", updateBlockNumber);

//       return () => {
//         library.removeEventListener("block", updateBlockNumber);
//       };
//     }
//   }, [library]);

//   return blockNumber;
// }
