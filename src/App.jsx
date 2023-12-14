import "./App.css";
import Brands from "./components/Brands/Brands";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Heading from "./components/Heading/Heading";
import NavigationBar from "./components/Navigation/NavigationBar";
import Network from "./components/Network/Network";
import Plans from "./components/Plans/Plans";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
import Subscribe from "./components/Subscribe.jsx/Subscribe";
import "./index.css";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Heading />
      <Stats />
      <Features />
      <Plans />
      <Network />
      <Brands />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
