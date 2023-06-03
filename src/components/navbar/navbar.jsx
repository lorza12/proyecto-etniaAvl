import { useState } from "react";
import { Prompt } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/LOGOETNIAAVL.png"
import { ImMenu } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { SiWebpack } from "react-icons/si";
import { RiRegisteredFill } from "react-icons/ri";
import { HiOfficeBuilding } from "react-icons/hi";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.navbarContainer__Logo}>
          <Link href={'/'}>
          <Image
            src={Logo}
            alt="img logo"
            width={270}
            height={170}
          />
          </Link>

        </div>
        <div className={styles.navBarContainer__options}>
          <Link href={'/'}><p className={prompt.className}>Inicio</p></Link>
          <Link href={'/products'}><p className={prompt.className}>Productos</p></Link>
          <Link href={'/about'}><p className={prompt.className}>Compañia</p></Link>
          <Link href={'/brans'}><p className={prompt.className}>Marcas</p></Link>
        </div>
        <div className={styles.navBarContainer__option2}>
              <button type="button" className={styles.butto_cart} onClick={toggle}>
                <p>
                  <ImMenu color="#ffffff" size={40}/>
                </p>
              </button>
            </div>
            <div className={`${styles.navBarContainer__opt} ${open && styles.menuOpen}`}>
              <button type="button" className={styles.butto_cart2} onClick={toggle}>X</button>
              <ul className={styles.nemuItems}>
                <div className={styles.span}>
                <Link href={'/'}><li className={prompt.className}> <AiFillHome size={20}/> Inicio </li></Link>
                <span className={styles.span2}>&#8594;</span>
                </div>
                <br />
                <br />
                <div className={styles.span}>
                <Link href={'products'}><li className={prompt.className}> <SiWebpack size={20}/> Productos</li></Link>
                <span className={styles.span2}>&#8594;</span>
                </div>
                <br />
                <br />
                <div className={styles.span}>
                <Link href={'/about'}><li className={prompt.className}><HiOfficeBuilding size={20}/> Compañia</li></Link>
                <span className={styles.span2}>&#8594;</span>
                </div>
                <br />
                <br />
                <div className={styles.span}>
                <Link href={'/brands'}><li className={prompt.className}><RiRegisteredFill size={20}/> Marcas</li></Link>
                <span className={styles.span2}>&#8594;</span>
                </div>
              </ul>

            </div>
      </div>
    </>
  );
}

export default NavBar;
