import NavBar from "./components/NavBar";
import Etusivu from "./components/Etusivu";
import SocialLinks from "./components/SocialLinks";
import Lounas from "./components/Lounas";
import Alacarte from "./components/Alacarte";
import Pizzakebab from "./components/Pizzakebab";
import Kuljetus from "./components/Kuljetus";
import Yhteystiedot from "./components/Yhteystiedot";
import DarkMode from "./components/DarkMode";
import NewsReel from "./components/NewsReel";

const App = () => {
  return (
    <div>
            <NewsReel />
      <NavBar />
      <Etusivu />
      <Lounas />
      <Alacarte />
      <Pizzakebab />
      <Kuljetus />
      <Yhteystiedot />
      
      <SocialLinks />
      <DarkMode />
    </div>
  );
};

export default App;
