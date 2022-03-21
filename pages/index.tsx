import React, { FC } from "react";
import { MetaMaskCard } from "../components/MetaMaskCard";
import Listings from "../components/Listings";

const DUMMY_LISTINGS = [
  {
    id: "abc123",
    title: "Taylormade Driver",
    image:
      "https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1644988033978/zoom/TA094_zoom_D.jpg",
    type: "taylormade",
    description: "Booming driver",
  },
  {
    id: "def456",
    title: "Callaway Driver",
    image:
      "https://www.callawaygolf.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1645077901414/sits/drivers-2022-rogue-st-max-ls/drivers-2022-rogue-st-max-ls___1.png?sw=450&sfrm=png",
    type: "callaway",
    description: "Slick as can be",
  },
];

interface HomePageProps {
  listings: any;
}

// function App() {
//   return (
//     <Listings listings={props.listings} />;
//     <div
//       style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
//     >
//       <MetaMaskCard />
//     </div>
//   );
// }

const HomePage: FC<HomePageProps> = (props): JSX.Element => {
  return (
    <div>
      <Listings listings={props.listings} />
      <div
        style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
      >
        <MetaMaskCard />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      listings: DUMMY_LISTINGS,
    },
    revalidate: 1,
  };
}

export default HomePage;
