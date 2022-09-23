import "./App.css";
import travel_01 from "./Images/travel-01.jpg";
import travel_02 from "./Images/travel-02.jpg";
import travel_03 from "./Images/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";


function App() {
  const navbarLinks = [
    { url: "products", title: "Products" },
    { url: "about", title: "About" },
    { url: "contact", title: "Contact" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Products
        imageSrc={travel_02}
        title={"Be an explorer."}
        flipped={true}
      />
      <About
        imageSrc={travel_03}
        title={"About us"}
        flipped={false}
      />
      <Contact
        imageSrc={travel_03}
        title={"Contact us"}
        flipped={false}
      />
    </div>
  );
}

export default App;
