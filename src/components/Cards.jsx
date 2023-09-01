import React from "react";
import styles from "./Cards.module.css";
import { CountrieContex } from "../CountrieContex";
import Error from "../helper/Error";
import Card from "./Card";
import CardSkeleton from '../helper/CardSkeleton'


const Cards = () => {
  const {data,error,loading,inputSearch,inputFilter} = React.useContext(CountrieContex)
  React.useEffect(()=>{
    document.title = 'Countries of the world'
    document.querySelector('#faviconFlag').setAttribute('href', '/favicon-32x32.png')
    
  },[])
  if(error) return <Error error={error} />
  return (
    <div className={error ? null: `${styles.gridCards} container`}>
      {loading &&  <CardSkeleton cards={250} />}
      {data && data
      .filter((country => country.name.common.toLowerCase().includes(inputSearch.toLowerCase())))
      .filter((country => country.region.toLowerCase().includes(inputFilter.toLowerCase())))
      .sort((p1,p2) => p1.name.common < p2.name.common ? -1 : 1)
      .map((pais) => (
        <Card key={pais.name.common} data={pais} />
      ))
      }
    </div>
  );
};

export default Cards;
