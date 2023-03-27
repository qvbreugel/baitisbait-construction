import "@/styles/globals.css";
import { Hind } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const hind = Hind({
  variable: "--primary-font",
  subsets: ["latin"],
  weight: "300",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={hind.className}>
      <Component {...pageProps} />
    </main>
  );
}
