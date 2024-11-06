import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Error.module.css";
import abacate from "../../assets/abacate.png";

export default function Error() {
  return (
    <div>
      <Header />
      <h1 className={styles.errorTitle}>Error 404 - Página não encontrada</h1>
      <img
        src={abacate}
        alt="Imagem de abacate"
        className={styles.abacateImage}
      />
      <Footer />
    </div>
  );
}
