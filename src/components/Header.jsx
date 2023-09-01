import React from "react";
import styles from "./Header.module.css";
import { ThemaContex } from "../ThemaContex";
import LuaSvg from "../svgs/LuaSvg";
import { Link } from "react-router-dom";

const Header = () => {
  const { thema, toggleThema } = React.useContext(ThemaContex);


  React.useEffect(()=>{
    document.title = 'Countries of the world'
  },[])

  return (
    <header className={thema == "light" ? styles.bgColor : styles.bgColorDark}>
      <div className="container">
        <nav className={styles.flexNav}>
          <Link className={styles.logo} to="/" aria-label="Home">
              Where in the world ?
          </Link>
          <div className={styles.modeCont}>
             <LuaSvg whatThema={thema} />
            <p onClick={toggleThema} className={styles.mode}>
              Dark Mode
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
