import { useState } from "react";
import Tariff from "./tariff/tariff.jsx";
import "../styles/index.scss";

const Tariffs = () => {
  const tariffs = [
    { id: 1, name: "Безлимитный 300", price: 300, speed: 10, color: "#ffff" },
    { id: 2, name: "Безлимитный 450", price: 450, speed: 50, color: "#ffff" },
    { id: 3, name: "Безлимитный 550", price: 550, speed: 100, highlight: true, color: "#ffff" },
    { id: 4, name: "Безлимитный 1000", price: 1000, speed: 200, color: "#ffff" },
  ];

  const [selectedTariffId, setSelectedTariffId] = useState(null);

  const handleTariffSelect = (id) => {
    setSelectedTariffId(id);
  };

  return (
    <div className="tariffs-container">
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          isHighlighted={tariff.highlight || false}
          color={tariff.color}
          isSelected={selectedTariffId === tariff.id} 
          onSelect={() => handleTariffSelect(tariff.id)} 
        />
      ))}
    </div>
  );
};

export default Tariffs;
