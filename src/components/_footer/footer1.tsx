import Head from "next/head";
import { Prompt } from "next/font/google";
import styles from "@/styles/Footer.module.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import Image from "next/image";
import Logo from "../../../public/assets/logo-indcomer.png";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Cl+136+%2353b-30,+Suba,+Bogot%C3%A1/@4.7239334,-74.0608413,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f853e622b1bc3:0x67e208c9631872c4!8m2!3d4.7239281!4d-74.0582664!16s%2Fg%2F11h4nb091x?hl=es&entry=ttu";

  const facebookUrl = "https://es-la.facebook.com/";

  return (
    <>
      <main className={styles.footerContainer} id="footer">
        <section className={prompt.className}>
          <section className={styles.footerContainer__section1}>
            <article className={styles.footerContainer__section1__inf}>
              <h1>Dirección</h1>
              <p>Calle 136 # 53b-30 - Bogota</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <TbMapSearch fontSize={19} /> &nbsp;
                <span className={styles.subrayado}>Ver mapa</span>
              </a>
              <br />
              <br />
              <h1>Correo electronico</h1>
              <p>info@etniaavl.com</p>
              <br />
              <h1>Telefono</h1>
              <p>314 673 05423</p>
            </article>
            <article className={styles.footerContainer__section1__hours}>
              <h1>Horarios</h1>
              <div
                className={styles.footerContainer__section1__hours__sections}
              >
                <div className={styles.divs__interval}>
                  <p>Lun-Vie</p>
                  <p>8:00 a.m - 5:00 p.m</p>
                </div>
              </div>
            </article>
            <article className={styles.footerContainer__section1__networks}>
              <h1>Síguenos</h1>
              <div className={styles.div__networks}>
                <a href={facebookUrl} target="_blank" rel="iconFacebook">
                  <BsFacebook fontSize={30} />
                </a>
                <br />
                <BsInstagram fontSize={30} />
                <br />
                <BsTwitter fontSize={30} />
              </div>
            </article>
          </section>
          <section className={styles.footerContainer__section2}>
            <article>
              <p>
                <FaCopyright /> Todos los derechos reservados 2023
              </p>
            </article>
            <article>
              <p>Politicas EtniaAvl</p>
            </article>
            <article>
              <Image src={Logo} alt="logo" width={200} />
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Footer;
