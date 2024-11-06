import React from "react";
import * as styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <span>Todos os direitos reservados </span> &copy; 2024{" "}
      </div>
    </footer>
  );
}
