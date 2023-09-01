import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./Countrie.module.css";
import { CountrieContex } from '../CountrieContex';
import SetaPais from '../svgs/SetaPais';
import BorderCountries from './BorderCountries';
import { ThemaContex } from '../ThemaContex';
import CountrieSkeleton from '../helper/CountrieSkeleton';

const Countrie = () => {
  const {data,loading} = React.useContext(CountrieContex)
  const { thema } = React.useContext(ThemaContex);
  const params = useParams();

  React.useEffect(()=>{
    if(data && params.cod){
      const descPag = data.filter((item => item.cca3 === params.cod))
      document.title = descPag[0].name.common
      document.querySelector('#faviconFlag').setAttribute('href',descPag[0].flags.svg ? descPag[0].flags.svg : '/favicon-32x32.png')
    }
    
  },[data,params.cod])

  return (
    <div className='container'>
      <div>
        <Link className={thema == 'light' ? styles.seta : `${styles.seta} ${styles.setaDark}`} to='/'>
          <SetaPais/>
          Back
        </Link>
      </div>
      {loading && <CountrieSkeleton cards={1} />}
     {data && data
     .filter((country => country.cca3 === params.cod))
     .map((item)=>(
      <div className={thema == 'light' ? styles.flexCont : styles.flexContDark} key={item.name}>
        <div className={styles.contImg}>
          <img className={styles.img} src={item.flags.svg}/>
        </div>
        <div className={`${styles.flex1} ${styles.pdTop}`}>
          <h2 className={styles.mbh1}>{item.name.common}</h2>
          <div className={styles.flexList}>
            <ul className={styles.list}>
              <li>Native Name: <span>{Object.hasOwn(item.name, 'nativeName') ? Object.values(item.name.nativeName)[0].common : item.name.common}</span></li>
              <li>Population: <span>{item.population.toLocaleString("en-US")}</span></li>
              <li>Region: <span>{item.region}</span></li>
              <li>Sub Region: <span>{item.subregion ? item.subregion : item.region}</span></li>
              <li>Capital: <span>{item.capital ? item.capital : '--'}</span></li>
            </ul>
            <ul className={styles.list}>
              <li>Top Level Domain: <span>{item.tld[0]}</span></li>
              <li>Currencies: <span>{item.currencies ? Object.values(item.currencies)[0].name : '--'}</span></li>
              <li>Languages: <span>{item.languages ? Object.values(item.languages).join(", ") : '--'}</span></li>
            </ul>
          </div>
          <div className={styles.flexBorders}>
            <p className={styles.borderP}>Border Countries: </p>
            <ul className={styles.flexlistborde}>
              <BorderCountries border={item.borders} />
            </ul>
          </div>
        </div>
      </div>
     ))
     }
    </div>
  )
}

export default Countrie