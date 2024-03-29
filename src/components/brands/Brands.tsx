import Head from "next/head";
import styles from "@/styles/Brands.module.css";
import Image from "next/image";
import { Prompt, Lato } from "next/font/google";
import brand1 from "../../../public/assets/brands-logos/WORK_PRO_LIFTE.png";
import brand2 from "../../../public/assets/brands-logos/88434ced-6a7b-4817-b9f2-6c060ec40470.png";
import brand3 from "../../../public/assets/brands-logos/104a04d9-e509-4ea5-ad82-d06c7bdf3a07.png";
import brand4 from "../../../public/assets/brands-logos/0eb9cbd5-566f-4be3-9191-7a52cfe10bd5.png";
import brand5 from "../../../public/assets/brands-logos/ea52129e-6176-4927-9e4e-63d962e5c948.png";
import brand6 from "../../../public/assets/brands-logos/ARTE LOGOTIPO_RGB_5.png";
import Link from "next/link";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

function Brands() {
  return (
    <>
      <main className={styles.bransContainer}>
        <section className={styles.bransContainer__title}>
          <h1 className={lato.className}>Marcas asociadas</h1>
        </section>
        <section className={styles.bransContainer__brands}>
          <article className={styles.bransContainer_brandsUp}>
            <Link href={`https://gammaledvision.com/`} target="_blank">
              <div className={styles.bransContainer__brand__circle}>
                <Image src={brand5} alt="brand5" width={150} height={50} />
              </div>
            </Link>

            <Link href={`/brands/workpro-sound`}>
              <div className={styles.bransContainer__brand__circle}>
                <Image src={brand4} alt="brand4" width={150} height={50} />
              </div>
            </Link>

            <Link href={`/brands/lightshark`}>
              <div className={styles.bransContainer__brand__circle}>
                <Image src={brand2} alt="brand2" width={195} height={45} />
              </div>
            </Link>
          </article>
          <article className={styles.bransContainer_brandsDown}>
            <div className={styles.bransContainer__brand3}>
              <Link href={`/brands/fantek`}>
                <div className={styles.bransContainer__brand__circle}>
                  <Image src={brand3} alt="brand3" width={150} height={50} />
                </div>
              </Link>
            </div>
            <div className={styles.bransContainer__brand3}>
              <Link href={`/brands/workpro-lifters`}>
                <div className={styles.bransContainer__brand__circle}>
                  <Image src={brand1} alt="brand1" width={195} height={50} />
                </div>
              </Link>
            </div>
            <div className={styles.bransContainer__brand3}>
              <Link href={`https://domoticas.com.co/`} target="_blank">
                <div className={styles.bransContainer__brand__circle}>
                  <Image src={brand6} alt="brand1" width={250} height={100} />
                </div>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Brands;
