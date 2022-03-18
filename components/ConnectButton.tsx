import React from "react";
import type { Web3ReactHooks } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import classes from "./ConnectButton.module.css";
import { getAddChainParameters } from "../constants/chains";
// import { useCallback, useState } from "react";
// import { CHAINS, getAddChainParameters, URLS } from "../constants/chains";

/**
 * Wrapper function allowing a connection to be made to Web3 with Metamaxk
 * @return {object} JSX of full app
 */
function ConnectButton({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}: {
  connector: MetaMask;
  chainId: ReturnType<Web3ReactHooks["useChainId"]>;
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  error: ReturnType<Web3ReactHooks["useError"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
}) {
  //   const isNetwork = connector instanceof Network;
  //   const displayDefault = !isNetwork;
  //   const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map(
  //     (chainId) => Number(chainId)
  //   );

  // const [desiredChainId, setDesiredChainId] = useState<number>(
  //   isNetwork ? 1 : -1
  // );

  const desiredChainId = -1;

  //   const switchChain = useCallback(
  //     async (desiredChainId: number) => {
  //       setDesiredChainId(desiredChainId);
  //       // if we're already connected to the desired chain, return
  //       if (desiredChainId === chainId) return;
  //       // if they want to connect to the default chain and we're already connected, return
  //       if (desiredChainId === -1 && chainId !== undefined) return;

  //       if (connector instanceof Network) {
  //         await connector.activate(
  //           desiredChainId === -1 ? undefined : desiredChainId
  //         );
  //       } else {
  //         await connector.activate(
  //           desiredChainId === -1
  //             ? undefined
  //             : getAddChainParameters(desiredChainId)
  //         );
  //       }
  //     },
  //     [connector, chainId]
  //   );

  if (error) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() =>
            connector instanceof Network
              ? connector.activate(
                  desiredChainId === -1 ? undefined : desiredChainId
                )
              : connector.activate(
                  desiredChainId === -1
                    ? undefined
                    : getAddChainParameters(desiredChainId)
                )
          }
        >
          Error
        </button>
      </div>
    );
  } else if (isActive) {
    return (
      <div className={classes.button}>
        <div style={{ marginBottom: "1rem" }} />
        <button onClick={() => connector.deactivate()}>Disconnect</button>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          className={classes.button}
          onClick={
            isActivating
              ? undefined
              : () =>
                  connector instanceof Network
                    ? connector.activate(
                        desiredChainId === -1 ? undefined : desiredChainId
                      )
                    : connector.activate(
                        desiredChainId === -1
                          ? undefined
                          : getAddChainParameters(desiredChainId)
                      )
          }
          disabled={isActivating}
        >
          Connect
        </button>
      </div>
    );
  }
}

export default ConnectButton;
