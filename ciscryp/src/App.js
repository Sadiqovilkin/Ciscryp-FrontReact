import Search from "./Components/Home/Search_cart/Search";
import Discover from "./Components/Home/Discover/Discover";
import Banner from "./Components/Home/Banner/Banner";
import Carts from "./Components/Home/Carts/Carts";
import Slider from "./Components/Home/Slider/Slider";
import Wrapper from "./Components/Home/Wrapper/Wrapper";
function App() {
  return (
    <main>
      <Discover />
      <Banner />
      <Carts />
      <Slider />
      <Search />
      <Wrapper />
    </main>
  );
}

export default App;
