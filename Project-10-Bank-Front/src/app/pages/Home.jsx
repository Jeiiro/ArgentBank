import Navbar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Feature from "../components/Features.jsx";
import IconChat from "../../assets/icon-chat.webp";
import IconMoney from "../../assets/icon-money.webp";
import IconSecurity from "../../assets/icon-security.webp";
import Footer from "../components/Footer.jsx";


const features = [
  {
    imgSrc: IconChat,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    imgSrc: IconMoney,
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    imgSrc: IconSecurity,
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section className="flex">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;