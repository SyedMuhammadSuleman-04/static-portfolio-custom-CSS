import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="container mx-auto px-12 py-4"></div>
      <div className="container mx-auto px-12 py-4">
        <About />
      </div>
      <div>
        <br />
        <hr className="bg-red-500" />
      </div>
      <br /> <br />
      <div>
        <Skills />
      </div>
      <div>
        <br />
        <hr className="bg-red-500" />
      </div>
      <br /> <br />
      <div>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
