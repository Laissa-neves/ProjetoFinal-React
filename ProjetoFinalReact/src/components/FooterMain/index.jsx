import React from "react";
import * as styles from "./FooterMain.module.css";

export default function FooterMain() {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.menu}>
        <span>Todos os direitos reservados </span> &copy; 2024{" "}
      </div>
    </footer>
  );
}
