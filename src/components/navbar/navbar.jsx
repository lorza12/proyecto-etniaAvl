import { Prompt } from "next/font/google";
import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/LOGOETNIAAVL.png"

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function NavBar() {
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.navbarContainer__Logo}>
          <Image
            src={Logo}
            alt="img logo"
            width={200}
            height={100}
          />
        </div>
        <div className={styles.navBarContainer__options}>
          <p>Productos</p>
          <p>Compañia</p>
          <p>Marcas Asociadas</p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
