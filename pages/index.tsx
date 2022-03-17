import React from "react";
import { MetaMaskCard } from "../components/MetaMaskCard";

function App() {
  return (
    <div
      style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
    >
      <MetaMaskCard />
    </div>
  );
}

export default function Home() {
  return <App />;
}
