import Head from "next/head";
import Banner from "../components/banner/banner";
import KnowUs from "../components/knowUs/knowUs";
import Products from "../components/products/products1";
import Brands from "@/components/brands/Brands";

function Home() {
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
      <Products />
      <Brands />
    </>
  );
}

export default Home;
