import Head from "next/head";
import { Prompt } from "next/font/google";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { mainProducts as prod } from "../../assets/dataMainProducts";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function Products() {
  return (
    <>
      <main className={styles.main2}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainer__title}>
            <div className={prompt.className}>
              <h1>Nuestros productos</h1>
            </div>
          </div>

          <div className={styles.productsContainer__products}>
            {prod.map((product) => (
              <>
                <div
                  key={product.id}
                  className={styles.productsContainer__product__section1}
                >
                  <div
                    className={styles.productsContainer__product__section1_1}
                  >
                    {" "}
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={200}
                    />
                  </div>

                  <div
                    className={styles.productsContainer__product__section1_2}
                  >
                    <h1 className={prompt.className}>{product.name}</h1>
                    <p className={prompt.className}>{product.tags}</p>
                    <br />
                    <Link href={`/products/${product.id}`}>
                      <button type="button" className={styles.product__button}>
                        Ver Producto{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className={prompt.className}>
            <div className={styles.productsContainer__title2}>
              <Link href={`/products`}>
                <button className={styles.product__button2}>
                  Ver todos nuestros productos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
