import React, { FC } from "react";
import Listing from "./Listing";
import classes from "./Listings.module.css";

interface ListingProps {
  listings: any;
}

const Listings: FC<ListingProps> = (props): JSX.Element => {
  return (
    <ul className={classes.list}>
      {props.listings.map(
        (listing: {
          id: string;
          image: string;
          title: string;
          type: string;
          description: string;
        }) => (
          <Listing
            key={listing.id}
            id={listing.id}
            image={listing.image}
            title={listing.title}
            type={listing.type}
            description={listing.description}
          />
        )
      )}
    </ul>
  );
};

export default Listings;
