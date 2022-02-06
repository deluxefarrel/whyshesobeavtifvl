import Content from "../components/content/Content";
import About from "../components/about/About";
import Profile from "../components/profile/Profile";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <Content />
      <About />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}
