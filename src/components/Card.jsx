import React from "react";
import styles from "./Card.module.css";
import { ThemaContex } from "../ThemaContex";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { thema } = React.useContext(ThemaContex);
  return (
    <div className="animeLeft">
      <div
        className={`${styles.card} ${thema === "light" ? "" : styles.cardDark}`}
        key={data.flag}
      >
        <Link to={`/pais/${data.cca3}`}>
          <div className={styles.cardImg}>
            <img src={data.flags.png} alt={data.flags.alt} />
          </div>
          <div
            className={thema == "light" ? styles.cardinfo : styles.cardinfoDark}
          >
            <h3 className={styles.title}>{data.name.common}</h3>
            <ul>
              <li className={styles.infoList}>
                <span>Population:</span>{" "}
                {data.population.toLocaleString("en-US")}
              </li>
              <li className={styles.infoList}>
                <span>Region:</span> {data.region}
              </li>
              <li className={styles.infoList}>
                <span>Capital:</span> {data.capital ? data.capital[0] : "--"}
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
