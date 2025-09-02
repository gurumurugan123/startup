import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="py-20"><About /></section>
        <section id="services" className="py-20 bg-gray-50"><Services /></section>
        <section id="work" className="py-20"><Portfolio /></section>
        <section className="py-20 bg-gray-50"><WhyChooseUs /></section>
        <section className="py-20"><Testimonials /></section>
        <section className="py-20 bg-gray-50"><Team /></section>
        <section id="contact" className="py-20"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
