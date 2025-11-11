import Content from "../components/content/Content";
import About from "../components/about/About";
import Profile from "../components/profile/Profile";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black ">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>whyshesobeavtifvl</title>
      </Head>
      <Nav />
      <Content />

      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}
