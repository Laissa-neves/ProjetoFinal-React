import React from 'react'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import styles from './Error.module.css';


export default function Error() {
  return (
    <div>
      <Header/>
      <h1 className={styles.errorTitle}>Error 404 - Página não encontrada</h1>
      <Footer/>
      
    </div>



  );
}
