import React from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import ConnectButton from "../ConnectButton";
import { hooks, metaMask } from "../../connectors/metaMask";

const { useChainId, useError, useIsActivating, useIsActive } = hooks;

function MainNavigation() {
  const chainId = useChainId();
  const error = useError();
  const isActivating = useIsActivating();
  const isActive = useIsActive();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Pipeline</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Listings</Link>
          </li>
          <li>
            <Link href="/new-listing">Add New Listing</Link>
          </li>
          <li>
            <ConnectButton
              connector={metaMask}
              chainId={chainId}
              isActivating={isActivating}
              error={error}
              isActive={isActive}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
