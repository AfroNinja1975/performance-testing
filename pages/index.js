import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from "@nextui-org/react";
import Navigation from "./nav/Navigation";
import Body from "./Body";
import Footer from "./Footer";

export default function Home() {
  const NextButton = () => {
    let array = new Array(200).fill(0);
    const data = array.map((i, key) => <Button href="https://www.codazen.com" key={key}>Default</Button>);
    return data;
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Body />
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
