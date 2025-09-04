import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import VisionMission from "./components/VisionMission.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Blog from "./components/Blog.jsx";

export default function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="py-20"><About /></section>
        <section id="vision" className="py-20 bg-gray-50 dark:bg-gray-800"><VisionMission /></section>
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800"><Services /></section>
        <section id="work" className="py-20"><Portfolio /></section>
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800"><Blog /></section>
        <section className="py-20"><WhyChooseUs /></section>
        <section className="py-20 bg-gray-50 dark:bg-gray-800"><Testimonials /></section>
        <section className="py-20"><Team /></section>
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800"><Contact /></section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
