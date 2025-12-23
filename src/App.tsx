import "./App.css";
import logoDefqon from "./assets/logoDefqon.png";
import tomorrowlandLogo from "./assets/tomorrowlandLogo.png";
import rotterdameRaveLogo from "./assets/rotterdameRaveLogo.png";
import FestivalCard from "./components/FestivalCard.tsx";

import NavBar from "./components/navBar.tsx";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar
        title="MonSite"
        items={[
          { label: "Accueil", href: "/" },
          { label: "Liste des festivals prevu", href: "/Liste" },
        ]}
      />

      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="grid grid-cols-2 gap-10">
          <div>
            {/* Defqon */}
            <FestivalCard
              logo={logoDefqon}
              name="Defqon 1"
              description="Le plus gros festival des Pays-Bas"
              location="Pays-Bas"
              price={180}
              url="https://www.defqon1.com"
            />
          </div>
          <div>
            {/* rotterdameRave */}
            <FestivalCard
              logo={rotterdameRaveLogo}
              name="Rotterdame Rave"
              description="Festival Techno underground"
              location="Pays-Bas"
              price={70}
              url="https://www.rotterdamrave.com/"
            />
          </div>
          <div>
            {/* Tomorrowland */}
            <FestivalCard
              logo={tomorrowlandLogo}
              name="Tomorrowland"
              description="Le plus gros festival du monde"
              location="Belgique (Boom)"
              price={180}
              url="https://www.tomorrowland.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
