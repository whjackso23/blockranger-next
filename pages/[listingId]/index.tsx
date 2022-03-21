import React from "react";
import Listing from "../../components/Listing";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// import { Fragment, useContext } from "react";

interface ListingProps {
  id: string;
  image: string;
  title: string;
  description: string;
  type: string;
}

// const ListingDetails: NextPage<ListingProps> = ({
//   id,
//   image,
//   title,
//   description,
//   type,
// }: {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
//   type: string;
// }) => {
//   return <Listing image={image} title={title} description={description} />;
// };

function ListingDetails(props: ListingProps): React.ReactElement {
  return (
    <Listing
      id={props.id}
      image={props.image}
      title={props.title}
      description={props.description}
      type={props.type}
    />
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { listingId } = context.params as IParams; // no longer causes error
  const props = {
    listingData: {
      id: listingId,
      image:
        "https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1644988033978/zoom/TA094_zoom_D.jpg",
      title: "Taylormade",
      description: "Taylormade Driver very nice!",
    },
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        listingId: "abc123",
      },
    },
    {
      params: {
        listingId: "def456",
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
};

// function ListingDetails() {
//   return (
//     <Listing
//       image="https://www.taylormadegolf.com/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1644988033978/zoom/TA094_zoom_D.jpg"
//       title="Taylormade"
//       description="Taylormade Driver very nice!"
//     />
//   );
// }

// // nextjs needs to generate all the pages for all possible id urls
// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     // one object per version of the dynamic page
//     paths: [
//       {
//         params: {
//           listingId: "abc123",
//         },
//       },
//       {
//         params: {
//           listingId: "def456",
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   // fetch data for a single listing

//   const listingId = context.params.listingId;

//   return {
//     props: {

//     },
//   };
// }

export default ListingDetails;
