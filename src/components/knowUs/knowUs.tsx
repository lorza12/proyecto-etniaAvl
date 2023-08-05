import Head from "next/head";
import { Prompt } from "next/font/google";
import styles from "@/styles/KnowUs.module.css";
import Image from "next/image";
import Logo from "../navbar/assets/LOGOETNIAAVL.png";
import Logo2 from "../knowUs/assets/LOGOETNIAAVL2.png";
import Link from "next/link";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function KnowUs() {
  return (
    <>
      <main className={styles.main1}>
        <div className={styles.knowUSContainer}>
          <div className={styles.knowUSContainer__logo}>
            <br />
            <Image src={Logo} alt="img logo" width={500} height={300} />
          </div>
          <div className={styles.knowUSContainer__logo2}>
            <br />
            <Image src={Logo2} alt="img logo" width={400} height={200} />
          </div>
          <div className={styles.knowUSContainer__text}>
            <div className={prompt.className}>
              <h1 className={styles.knowUSContainer__text__h1}>
                ¿Quienes somos?
              </h1>
              <p className={styles.knowUSContainer__text__p1}>
                Somos una empresa dedicada a la importación y exportación de
                productos de alta calidad para el mundo de Audio, Video,
                Iluminación en el sector de espectáculos, eventos en vivo y
                teatral. Nos enfocamos en la distribución directa. Estamos
                comprometidos con ofrecer soluciones{" "}
                <b className={styles.b}>innovadoras</b> y
                <b className={styles.b}> tecnológicas</b> para crear
                experiencias <b className={styles.b}> únicas</b> y
                <b className={styles.b}> memorables</b>.
              </p>
              <Link href={"/"}>
                {" "}
                <button
                  type="button"
                  className={styles.knowUSContainer__button}
                >
                  Conocer mas{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default KnowUs;
