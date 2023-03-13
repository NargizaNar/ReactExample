import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/data.json";

// 1. Intial Context erstellen
const IntitialContext = createContext();

// 2. ParentContext erstellen
export function ParentContext({ children }) {
  // Variablen (Dot Notation und Desctructuring sind beide möglich)

  // Eigene Namen
  // const home1 = data.home;
  // const about1 = data.about;
  // const contact1 = data.contact;

  // Muss genauen Schlüsseln sein
  // const { home, about, contact } = data;

  const [cards, setCards] = useState([]);

  // Funktionen
  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data", data.results);
    setCards(data.results);
  };
  console.log("cards", cards);

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character");
  }, []);

  // value
  const value = { data, cards, setCards };

  // HTML/Komponent Information
  return (
    <IntitialContext.Provider value={value}>
      {children}
    </IntitialContext.Provider>
  );
}

// 3. Store inizialisieren
const store = () => useContext(IntitialContext);
export default store;
