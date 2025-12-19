import "./App.css";
import logoDefqon from "./assets/logoDefqon.png";
import tomorrowlandLogo from "./assets/tomorrowlandLogo.png";
import FestivalCard from "./components/FestivalCard.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="underline underline-offset-5">
          <h1>Festival 2026</h1>
        </div>
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
    </>
  );
}

export default App;
