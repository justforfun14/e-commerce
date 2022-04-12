import { Announcments } from "../components/Announcments/Announcements";
import { NavBar } from "../components/NavBar/NavBar";
import { Slider } from "../components/Slider/Slider";
import { Categories } from "../components/Categories/Categories";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Announcments />
      <NavBar />
      <Slider />
      <Categories />
    </div>
  );
};
