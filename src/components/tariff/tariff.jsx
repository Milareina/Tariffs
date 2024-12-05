import {useState } from "react";
import PropTypes from "prop-types"; 
import styles from "./Tariff.module.scss";

const Tariff = ({ name, price, speed, isHighlighted, color }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        if (isHighlighted) setIsClicked(!isClicked);
      };
      return (
        <div
          className={`${styles.tariff} ${isHighlighted ? styles.highlighted : ""} ${
            isClicked ? styles.clicked : ""
          } ${price === 550 ? styles.enlargeOnHover : ""}`}  
          style={{ backgroundColor: color }}
          onClick={handleClick}
        >
          <div className={styles.name}>
            <h3>{name}</h3>
          </div>
    
          <div className={styles.price}>
            <span className={styles.amount}>{price}</span>
            <span className={styles.perMonth}>руб/мес</span>
          </div>
    
          <div className={styles.speed}>
            <p>до {speed} Мбит/сек</p>
          </div>
    
          <div className={styles.description}>
            <p>Объем включенного трафика не ограничен</p>
          </div>
        </div>
      );
    };
    


Tariff.propTypes = {
  name: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
  speed: PropTypes.number.isRequired, 
  isHighlighted: PropTypes.bool, 
  color: PropTypes.string, 
};

export default Tariff;
