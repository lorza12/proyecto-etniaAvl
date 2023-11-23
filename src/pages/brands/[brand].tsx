import Head from "next/head";
import Image from "next/image";
// import { products as produ } from "../../assets/dataProducts";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { montserrat } from "@/styles/fonts";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "../../styles/BrandsAll.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { getImageProduct } from "@/services/products";

const BrandsDetail = ({ products }) => {
  console.log("🚀 ~ file: [brand].tsx:13 ~ BrandsDetail ~ products:", products);
  const scrollRef = useRef(null);
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return null;
  });

  const attributes = products.map((element) => {
    return element.attributes;
  });
  const brand = attributes.map((element) => {
    return element.brand;
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const scrollSlide = () => {
    if (windowSize >= 710 && windowSize <= 768) {
      return 400;
    } else {
      return 300;
    }
  };

  const sizeScroll = scrollSlide();

  const scrollButton = (scrollOffset: number) => {
    const scrollPosition = (scrollRef.current.scrollLeft += scrollOffset);
    const scrollToTop =
      Math.floor(
        scrollRef.current.scrollWidth - (scrollRef.current.scrollLeft + 1)
      ) <= scrollRef.current.clientWidth;
    const buttonLeft = scrollPosition <= 300 ? true : false;
    setBottom(scrollToTop);
    setTop(buttonLeft);
  };

  return (
    <>
      <Head>
        <title>Brands | Products </title>
        <meta name="description" content="Brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/EtniaAvlicon.ico" />
      </Head>

      <main className={styles.productsContainer__main}>
        <section>
          <h1 className={`${montserrat.className} ${styles.title}`}>
            / {brand[0]} /
          </h1>
        </section>
        <section>
          <div className={styles.productsGlobalContainer}>
            <div className={styles.buttonContainer}>
              <button
                className={styles.productsContainer__btn}
                onClick={() => scrollButton(-sizeScroll)}
                disabled={top}
              >
                <BsChevronLeft />
              </button>
            </div>

            <div className={styles.productsContainer} ref={scrollRef}>
              {attributes.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className={styles.productsItem}
                >
                  <Image
                    src={getImageProduct(item)}
                    alt="img"
                    width={200}
                    height={200}
                    className={styles.productImage}
                  />
                  <br />
                  <h2 key={item.id} className={montserrat.className}>
                    {item.name}
                  </h2>
                  <br />
                  <p className={montserrat.className}>{item.tags}</p>
                  <br />
                  <p>{}</p>
                  <button
                    className={`${montserrat.className} ${styles.details}`}
                  >
                    <h3>{`Details >`}</h3>
                  </button>
                </Link>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.productsContainer__btn}
                onClick={() => scrollButton(sizeScroll)}
                disabled={bottom}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BrandsDetail;

export async function getServerSideProps(context) {
  const { brand } = context.query;
  const client = new ApolloClient({
    uri: "https://etniaavl-admin-726308944a7f.herokuapp.com/graphql",
    cache: new InMemoryCache({
      addTypename: false,
      resultCaching: false,
    }),
  });

  const { data } = await client.query({
    query: gql`
      query getProduct($brandName: String!) {
        products(filters: { brand: { eq: $brandName } }) {
          data {
            attributes {
              name
              brand
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
    variables: {
      brandName: brand,
    },
  });

  return {
    props: {
      products: data?.products?.data,
    },
  };
}
