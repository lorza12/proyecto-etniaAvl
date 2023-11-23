import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ProductDetailPage.module.css";
import { useRouter } from "next/router";
import { products as produ } from "../../assets/dataProducts";
import { montserrat } from "@/styles/fonts";
import { GrTextAlignCenter } from "react-icons/gr";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { getImageProduct } from "@/services/products";

const ProductDetailPage = ({ product }) => {
  const attributes = product.map((element) => {
    return element.attributes;
  });
  return (
    <>
      <Head>
        <title>Producto | Detalle</title>
        <meta name="description" content="Products detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/EtniaAvlicon.ico" />
      </Head>

      <main className={montserrat.className}>
        {attributes.map((item) => (
          <>
            <section className={styles.ProductDetailContainer}>
              <section className={styles.ProductDetailContainer__mainConteiner}>
                <section className={styles.ProductDetailContainer__info}>
                  <article>
                    <Image
                      src={getImageProduct(item)}
                      alt="productDetail"
                      width={500}
                      height={450}
                    />
                  </article>

                  <article
                    className={styles.ProductDetailContainer__description}
                  >
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.brand}</p>
                      <br />
                      <span
                        className={
                          styles.ProductDetailContainer__description__tag
                        }
                      >
                        {item.tags}
                      </span>
                      <br />
                      <br />
                      <p>{item.description}</p>
                      <br />
                      <p>{item.description2}</p>
                    </div>
                  </article>
                </section>
              </section>
              <section className={styles.ProductDetailContainer__feactures}>
                {item.features && item.specifications ? (
                  <article
                    className={
                      styles.ProductDetailContainer__feactures__container
                    }
                  >
                    <div>
                      {item.features.length === 0 ? null : (
                        <h4>Caracteristicas:</h4>
                      )}

                      <br />
                      <ul className={styles.feacturesList}>
                        {item.features.map((element, index) => (
                          <div key={index}>
                            <li key={index}>{element.feature}</li>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={styles.ProductDetailContainer__feactures__img}
                    >
                      {item.specifications.length === 0 ? null : (
                        <>
                          <h4>Datos técnicos</h4>
                          <br />
                          <table
                            border={2}
                            width={"90%"}
                            rules="columns"
                            cellPadding={5}
                            cellSpacing={5}
                          >
                            <thead>
                              <tr>
                                <th>Model</th>
                                <th>{item.name}</th>
                              </tr>
                            </thead>
                            <tbody className={styles.productDetail__table}>
                              {item.specifications.map((element, index) => (
                                <tr key={index}>
                                  <td
                                    align="center"
                                    valign="middle"
                                    color="#333333"
                                    width={"50%"}
                                    height={39}
                                  >
                                    <span
                                      className={
                                        styles.productDetail__paragrafTable
                                      }
                                    >
                                      <strong>{element.name}</strong>
                                    </span>
                                  </td>
                                  <td
                                    align="center"
                                    valign="middle"
                                    color="#333333"
                                    width={"30%"}
                                  >
                                    <span
                                      className={
                                        styles.productDetail__paragrafTable
                                      }
                                    >
                                      <strong>{element.values}</strong>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </>
                      )}
                    </div>
                  </article>
                ) : null}
              </section>
            </section>
          </>
        ))}
      </main>
    </>
  );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const { name } = context.query;

  const client = new ApolloClient({
    uri: "https://etniaavl-admin-726308944a7f.herokuapp.com/graphql",
    cache: new InMemoryCache({
      addTypename: false,
      resultCaching: false,
    }),
  });

  const { data } = await client.query({
    query: gql`
      query getProduct($productName: String!) {
        products(filters: { name: { eq: $productName } }) {
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
              specifications(pagination: { pageSize: 50 }) {
                name
                values
              }
              features {
                feature
              }
              description
              description2
            }
          }
        }
      }
    `,
    variables: {
      productName: name,
    },
  });

  return {
    props: {
      product: data?.products?.data,
    },
  };
}
