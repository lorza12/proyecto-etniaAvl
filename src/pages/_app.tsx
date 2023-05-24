import Head from "next/head";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navBar/navBar";
import Banner from "@/components/banner/banner";
import KnowUs from "@/components/knowUs/knowUs";
import Products from "@/components/products/products";
import "@/styles/globals.css";
import "@/styles/Banner.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
