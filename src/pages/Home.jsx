import "../assets/styles/home.scss";
import imgfrontend from "../assets/imgs/frontend.png";
import imgbackend from "../assets/imgs/backend.png";
import imgdesigner from "../assets/imgs/designer.png";

import imglinkedin from "../assets/imgs/linkedin.png";
import imggithub from "../assets/imgs/github.png";
import imgdiscord from "../assets/imgs/discord.png"

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Board from "../components/Board";
import Card from "../components/Card";
import MapCards from "../components/MapCard";
import Logo from "../components/Logo";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <header className="m-3">
        <Navbar />
      </header>
      <main className="m-3">
        <Banner />
        <Board normaltext="Actually" boldtext="Studying" id="learning">
          <Card img={imgfrontend} normaltext="Front-end" boldtext="developer" description="(Sass, Bootstrap, React JS)" />
          <Card img={imgbackend} normaltext="Back-end" boldtext="developer" description="(NodeJS, Java, MySql)" />
          <Card img={imgdesigner} normaltext="UX/UI" boldtext="designer" description="(Figma, Zeplin, Adobe XD)" />
        </Board>
        <Board normaltext="My" boldtext="Portfolio" id="portfolio">

          {/* MAP DE CARDS */}
          <MapCards />

        </Board>
      </main>
      <footer >
        <Board normaltext="Contact" boldtext="Me" id="contactme">
          <Logo img={imglinkedin} normaltext="Linkedin" href="https://www.linkedin.com/in/leonardosantino/" />
          <Logo img={imggithub} normaltext="GitHub" href="https://github.com/leonardosantino" />
          <Logo img={imgdiscord} normaltext="Discord" href="https://discord.com/channels/@me/" />
        </Board>
        <Footer />
      </footer>
    </>
  );
}
export default Home;