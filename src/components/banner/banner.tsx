import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import img1 from "../../../public/assets/banner-img/18.png";
import img2 from "../../../public/assets/banner-img/1.png";
import img3 from "../../../public/assets/banner-img/6.png";
import img4 from "../../../public/assets/banner-img/2.png";
import img5 from "../../../public/assets/banner-img/14.png";
import img6 from "../../../public/assets/banner-img/21.png";
import img7 from "../../../public/assets/banner-img/12.png";
import img8 from "../../../public/assets/banner-img/8.png";
import img9 from "../../../public/assets/banner-img/5.png";
import img10 from "../../../public/assets/banner-img/19.png";
import img11 from "../../../public/assets/banner-img/17.png";
import img12 from "../../../public/assets/banner-img/15.png";
import img13 from "../../../public/assets/banner-img/20.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

function Banner() {
  const [imageWidth, setImageWidth] = useState(500);
  const [imageHeight, setImageHeight] = useState(800);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth > 2099) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(3);
    }
    if (window.innerWidth < 1500) {
      setImageWidth(400);
      setImageHeight(700);
    }

    if (window.innerWidth < 1210) {
      setImageWidth(300);
      setImageHeight(600);
    }
    if (window.innerWidth < 910) {
      setImageWidth(350);
      setImageHeight(650);
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
    if (window.innerWidth < 730) {
      setImageWidth(500);
      setImageHeight(800);
      setSlidesPerView(1);
    }
    if (window.innerWidth < 540) {
      setImageWidth(450);
      setImageHeight(750);
    }
    if (window.innerWidth < 440) {
      setImageWidth(350);
      setImageHeight(650);
    }
    if (window.innerWidth < 321) {
      setImageWidth(300);
      setImageHeight(600);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className={styles.bannerContainer}>
        <section className={styles.bannerContainer__banner}>
          <article className={styles.navBarContainer__banner}>
            <Swiper
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              slidesPerView={slidesPerView}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.navBarContainer__banner__mySwiper}
            >
              <SwiperSlide
                key={2}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <div className={styles.sssss}>
                  <Image
                    src={img2}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                key={3}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/workpro-lifters`}>
                  <Image
                    src={img3}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={4}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`https://gammaledvision.com/`}>
                  <Image
                    src={img4}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={5}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/lightshark`}>
                  <Image
                    src={img5}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={6}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/workpro-sound`}>
                  <Image
                    src={img13}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={7}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/fantek`}>
                  <Image
                    src={img6}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={8}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/workpro-lifters`}>
                  <Image
                    src={img7}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={9}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/workpro-sound`}>
                  <Image
                    src={img8}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={10}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`https://gammaledvision.com/`}>
                  <Image
                    src={img9}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={11}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/workpro-lifters`}>
                  <Image
                    src={img10}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={12}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/lightshark`}>
                  <Image
                    src={img11}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide
                key={13}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Link href={`/brands/fantek`}>
                  <Image
                    src={img12}
                    alt="img"
                    width={imageWidth}
                    height={imageHeight}
                    priority={true}
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </article>
          <div className={styles.margen}>
            <div className={styles.redes}>
              <BsFacebook fontSize={25} />
              <BsTwitter fontSize={25} />
              <BsInstagram fontSize={25} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Banner;
