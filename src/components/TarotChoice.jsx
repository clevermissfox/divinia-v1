import { useEffect, useState } from "react";
import Choice from "./Choice";

export default function TarotChoice() {
  const [tarot, setTarot] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);

  const random = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  };

  useEffect(() => {
    const fetchTarot = async () => {
      try {
        const req = await fetch("https://tarotapi.dev/api/v1/cards");
        const response = await req.json();
        setTarot(response.cards);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchTarot();
  }, []);

  useEffect(() => {
    if (tarot) {
      const indices = new Set();
      while (indices.size < 3) {
        indices.add(Math.floor(Math.random() * tarot.length));
      }
      setSelectedCards(Array.from(indices).map((index) => tarot[index]));
    }
  }, [tarot]);

  return (
    <>
      <ul className="choices-list margin-bs-1">
        {selectedCards.map((card, index) => (
          <li key={index} className="choices-option">
            <Choice choice={card.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
