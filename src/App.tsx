import "./App.css";
import logoDefqon from "./assets/logoDefqon.png";
import tomorrowlandLogo from "./assets/tomorrowlandLogo.png";
import rotterdameRaveLogo from "./assets/rotterdameRaveLogo.png";
import FestivalCard from "./components/FestivalCard.tsx";
import ThemeToggle from "./components/ThemeToggle.tsx";

function App() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col">      
          <div className="underline underline-offset-5">
            <h1>Liste des events 2026</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
