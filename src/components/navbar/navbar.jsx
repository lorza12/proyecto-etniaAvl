import { useState } from "react";
import { useRouter } from "next/router";
import { Prompt } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/LOGOETNIAAVL2.png";
import { ImMenu } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import { RiRegisteredFill } from "react-icons/ri";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <main className={styles.navBarMain}>
      <>
        <div className={styles.navBarContainer}>
          <div className={styles.navbarContainer__Logo}>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="img logo"
                width={380}
                height={190}
                className={styles.imgEtnia}
              />
            </Link>
          </div>
          <div className={styles.navBarContainer__options}>
            <Link href={"/"}>
              <p className={prompt.className}>Inicio</p>
            </Link>
            <Link href={"/products"}>
              <p className={prompt.className}>Productos</p>
            </Link>
            <Link href={"/brands"}>
              <p className={prompt.className}>Marcas</p>
            </Link>
            <Link href={"#footer"}>
              <p className={prompt.className}>Contacto</p>
            </Link>
          </div>
          <div className={styles.navBarContainer__option2}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              <p>
                <ImMenu color="#ffffff" size={40} />
              </p>
            </button>
            <div
              className={`${styles.menuContainer} ${isOpen && styles.menuOpen}`}
            >
              <button
                type="button"
                className={styles.butto_cart2}
                onClick={toggleMenu}
              >
                X
              </button>
              <ul className={styles.menuItems}>
                <div className={styles.span}>
                  <Link href={"/"}>
                    <li
                      className={prompt.className}
                      onClick={() => handleItemClick("/")}
                    >
                      {" "}
                      <AiFillHome size={20} /> Inicio{" "}
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>
                <br />
                <br />
                <div className={styles.span}>
                  <Link href={"products"}>
                    <li
                      className={prompt.className}
                      onClick={() => handleItemClick("products")}
                    >
                      {" "}
                      <SiWebpack size={20} /> Productos
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>
                <br />
                <br />
                <div className={styles.span}>
                  <Link href={"/brands"}>
                    <li
                      className={prompt.className}
                      onClick={() => handleItemClick("brands")}
                    >
                      <RiRegisteredFill size={20} /> Marcas
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>
                <br />
                <br />
                <div className={styles.span}>
                  <Link href={"#footer"}>
                    <li className={prompt.className}>
                      <MdPermContactCalendar size={20} /> Contacto
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}

export default NavBar;
