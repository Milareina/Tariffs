import Tariff from "./tariff/tariff.jsx";
import "../styles/index.scss";

const Tariffs = () => {
  const tariffs = [
    { name: "Безлимитный 300", price: 300, speed: 10, color: "#ffff" },
    { name: "Безлимитный 450", price: 450, speed: 50, color: "#ffff" },
    {
      name: "Безлимитный 550",
      price: 550,
      speed: 100,
      highlight: true,
      color: "#ffff",
    },
    { name: "Безлимитный 1000", price: 1000, speed: 200, color: "#ffff" },
  ];

  return (
    <div className="tariffs-container">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          isHighlighted={tariff.highlight || false}
          color={tariff.color}
        />
      ))}
    </div>
  );
};

export default Tariffs;