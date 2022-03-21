import React, { FC } from "react";
import { Fragment } from "react";

interface ListingProps {
  id: string;
  image: string;
  title: string;
  type: string;
  description: string;
}

const ListingDetail: FC<ListingProps> = (props): JSX.Element => {
  return (
    <Fragment>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Fragment>
  );
};

export default ListingDetail;
