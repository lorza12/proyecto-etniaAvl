import Head from "next/head";
import Banner from "../components/banner/banner";
import KnowUs from "../components/knowUs/knowUs";
import Products from "../components/products/products1";
import Brands from "@/components/brands/Brands";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";

function Home({ productsHome }) {
  return (
    <>
      <Head>
        <title>EtniaAvl</title>
        <meta
          name="description"
          content="
              Somos una empresa dedicada a la importación y exportación de productos de alta calidad para el mundo del Audio, Video, Iluminación en el sector de espectáculos, eventos en vivo y teatrales."
        />

        <link rel="icon" href="/EtniaAvlicon.ico" />
      </Head>
      <Banner />
      <KnowUs />
      <Products productsHome={productsHome} />
      <Brands />
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "https://etnia-avl-af5d3a9c6172.herokuapp.com/graphql",
    cache: new InMemoryCache({
      addTypename: false,
      resultCaching: false,
    }),
  });

  const { data } = await client.query({
    query: gql`
      query getMainProduct {
        homeProducts {
          data {
            attributes {
              name
              tags
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      productsHome: data?.homeProducts?.data,
    },
  };
}
