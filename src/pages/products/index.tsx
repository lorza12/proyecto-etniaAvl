//

"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { products as prod } from "../../assets/dataProducts";
import styles from "./Products.module.css";
import { useEffect, useId, useRef, useState } from "react";
import { montserrat } from "@/styles/fonts";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

export interface ProductModel {
  id: number;
  category: string;
  name: string;
  tags: string;
  image: string;
  brand: string;
  description: string;
  description2: string;
}

const Products = () => {
  const [brand, setBrand] = useState<string>("all");
  const [checked, setChecked] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return null;
  });
  const [top, setTop] = useState<boolean>(true);
  const [bottom, setBottom] = useState<boolean>(false);
  const brandCheckboxId = useId();
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "productsState",
      JSON.stringify({ brand, checked, top, bottom })
    );

    // return () => {
    //   localStorage.removeItem("productsState");
    // };
  }, [brand, checked, top, bottom]);

  useEffect(() => {
    const storedState = localStorage.getItem("productsState");
    if (storedState) {
      const {
        brand: storedBrand,
        checked: storedChecked,
        top: storedTop,
        bottom: storedBottom,
      } = JSON.parse(storedState);
      setBrand(storedBrand);
      setChecked(storedChecked);
      setTop(storedTop);
      setBottom(storedBottom);
    }
  }, []);

  const getUniqueCategory = (data: ProductModel[], field: string) => {
    let newElement = data.map((currentElement) => {
      return currentElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const filterProducts = (products: ProductModel[]) => {
    return products.filter((product) => {
      return brand === "all" || product.brand === brand;
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = event.target.value;
    setBrand(newBrand);
    setChecked(!checked);
    scrollRef.current.scrollLeft *= 0;
    setTop(true);
    setBottom(false);
  };

  const brandType = getUniqueCategory(prod, "brand");
  const filteredProducts = filterProducts(prod);

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
        <title>EtniaAvl | Products</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/EtniaAvlicon.ico" />
      </Head>
      <div className={styles.productsGlobalContainer}>
        <h1 className={montserrat.className}>/ PRODUCTOS /</h1>
        <div className={styles.productsWrapper}>
          <div className={styles.brandContainer}>
            <label htmlFor={brandCheckboxId} className={styles.brandTitle}>
              <h3 className={montserrat.className}>
                Marcas <AiOutlineDown />
              </h3>
            </label>
            <input
              type="checkbox"
              id={brandCheckboxId}
              checked={checked}
              onChange={(e) => setChecked(!checked)}
              hidden
            />
            <ul className={styles.brandList}>
              <li className={styles.brandListItem}>
                <div className={montserrat.className}>
                  <input
                    type="radio"
                    name="brand"
                    value="all"
                    id="all"
                    defaultChecked
                    className={styles.inputBrand}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="all" className={styles.cursorList}>
                    TODAS
                  </label>
                  
                </div>
              </li>
              {brandType.map((brand, idx) => (
                <li key={idx} className={styles.brandListItem}>
                  <div className={montserrat.className}>
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      id={brand}
                      className={styles.inputBrand}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor={brand} className={styles.cursorList}>
                      {brand}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.productsContainerMajor}>
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
              {filteredProducts.map((product) => (
                <div key={product.name} className={styles.productsItem}>
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className={styles.productsLink}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className={styles.productImage}
                    ></Image>
                  </Link>
                  <h2 className={montserrat.className}>{product.name}</h2>
                  <p className={montserrat.className}>{product.tags}</p>
                  <br />

                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className={styles.productsLink}
                  >
                    <button className={styles.details}>
                      <h3>{`Details >`}</h3>
                    </button>
                  </Link>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default Products;
