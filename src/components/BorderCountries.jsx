import React from 'react'
import { CountrieContex } from '../CountrieContex';
import styles from "./BorderCountries.module.css";
import { Link } from 'react-router-dom';
import { ThemaContex } from '../ThemaContex';

const BorderCountries = ({border}) => {
  const {data} = React.useContext(CountrieContex)
  const { thema } = React.useContext(ThemaContex);


  return (
    <>
      {border === undefined ? (
        <p>No has border countries</p>
      ) : (
        data
          .filter(item => border.includes(item.cca3))
          .map((item, i) => (
            <Link
              key={i}
              to={`/pais/${item.cca3}`}
              className={thema === 'light' ? styles.link : `${styles.link} ${styles.linkDark}`}
            >
              {item.name.common}
            </Link>
          ))
      )}
    </>
  );
  
}

export default BorderCountries