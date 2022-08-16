import Head from "next/head";
import Navigation from "../sections/nav/Navigation";
import Footer from "../sections/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Performance Testing</title>
      </Head>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
