import { Link } from "react-router-dom";
import "./Hauptmenü.css";

export default function Hauptmenü() {
  return (
    <div className="Hauptmenü__container">
      <header>
        <h1 className="Hauptmenü__Titel">Memory</h1>
      </header>
      <main className="Hauptmenü__main">
        <Link className="Hauptmenü__link" to="neues_Spiel">
          Neues Spiel
        </Link>
        <Link className="Hauptmenü__link" to="Spiel_fortsetzen">
          Spiel fortsetzen
        </Link>
        <Link className="Hauptmenü__link" to="Trophäen">
          Trophäen
        </Link>
      </main>
    </div>
  );
}
