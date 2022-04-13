import { Announcments } from "../components/Announcments/Announcements";
import { NavBar } from "../components/NavBar/NavBar";
import { Slider } from "../components/Slider/Slider";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Footer } from "../components/Footer/Footer";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Announcments />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
