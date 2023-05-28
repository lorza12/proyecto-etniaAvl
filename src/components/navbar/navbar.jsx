import { useState } from "react";
import { Prompt } from "next/font/google";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/LOGOETNIAAVL.png"
import { MdOutlineStorage } from "react-icons/md";
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
          <Image
            src={Logo}
            alt="img logo"
            width={200}
            height={100}
          />
        </div>
        <div className={styles.navBarContainer__options}>
          <p className={prompt.className}>Productos</p>
          <p className={prompt.className}>Compañia</p>
          <p className={prompt.className}>Marcas Asociadas</p>
        </div>
        <div className={styles.navBarContainer__option2}>
              <button type="button" className={styles.butto_cart} onClick={toggle}>
                <p>
                  <MdOutlineStorage color="#ffffff" size={35}/>
                </p>
              </button>
            </div>
            <div className={styles.navBarContainer__opt}>
              {open && (
                <><button
              className={styles.navBarContainer__optButton}
              type="button"
            >
              Productos
            </button><button
              className={styles.navBarContainer__optButton}
              type="button"
            >
                Compañia
              </button><button
                className={styles.navBarContainer__optButton}
                type="button"
              >
                Marcas Asociadas
              </button></>
              )}
            </div>
      </div>
    </>
  );
}

export default NavBar;
