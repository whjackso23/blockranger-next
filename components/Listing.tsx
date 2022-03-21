import React, { FC } from "react";
import { useRouter } from "next/router";
import Card from "./Card";
import classes from "./Listing.module.css";

interface ListingProps {
  id: string;
  image: string;
  title: string;
  type: string;
  description: string;
}

const Listing: FC<ListingProps> = (props): JSX.Element => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <div>{props.title}</div>
          <div>{props.type}</div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default Listing;
