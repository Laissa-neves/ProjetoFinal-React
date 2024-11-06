import React, { useState, useEffect } from "react";
import * as styles from "./FooterSearch.module.css";

export default function FooterSearch() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };
 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`${styles.footerSearch} ${isFooterVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.menu}>
        <span>Todos os direitos reservados</span> &copy; 2024{" "}
      </div>
    </footer>
  );
}