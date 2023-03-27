import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baitisbait &#8211; branding, design, content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <a className={styles.link} href="mailto:sicco@baitisbait.nl">
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
            sicco@baitisbait.nl
          </a>
          <a className={styles.link} href="tel:+31648338839">
            <FontAwesomeIcon
              className={styles.icon}
              icon={faMobileScreenButton}
            />
            +31 (0)6 483 38 839
          </a>
        </div>
      </main>
    </>
  );
}
