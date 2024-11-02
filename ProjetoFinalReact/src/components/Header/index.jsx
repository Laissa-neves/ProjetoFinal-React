import React from "react";
import * as styles from "./Header.module.css";
import Eco from "../../assets/eco.png";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <div className={styles.menu}>
        <img src={Eco} alt="Logo" height="100px"/>
        <h1>Eco+</h1>
      </div>
    </header>
  );
}
