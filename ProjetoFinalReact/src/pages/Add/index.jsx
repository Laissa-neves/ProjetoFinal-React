import React, { useState } from "react";
import * as styles from "./Add.module.css";
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Add() {

    const form = document.getElementById('formulario')

    const [values, setValues] = useState({
        nome: "",
        categoria: "",
        quantidade: 0,
        preco: 0
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://6722c0692108960b9cc578da.mockapi.io/produtos', values)
        .then(res => {
            console.log(res);
            alert("Produto cadastrado com sucesso!");
        })
        .catch(erro => console.log(erro));
        alert("Erro ao cadastrar produto");
        form.reset();
    }

  return (
    <div className={styles.general}>
    <Header />
      <main>
        <div className={styles.content}>
          <h2>Cadastrar produto</h2>
          
          <div className={styles.cardBodyPost}>
            <form id="formulario" onSubmit={handleSubmit}>
              
              <div className={styles.fields}>
                <input placeholder="Nome" required type="text" name="nome" id="nome" onChange={(e) => setValues({...values, nome: e.target.value})}/>
              </div>

              <div className={styles.fields}>
                <input placeholder="Categoria" required type="text" name="categoria" id="categoria" onChange={(e) => setValues({...values, categoria: e.target.value})} />
              </div>

              <div className={styles.fields}>
                <input placeholder="Quantidade" required type="number" name="quantidade" id="quantidade" onChange={(e) => setValues({...values, quantidade: e.target.value})}></input>
              </div>

              <div className={styles.fields}>
                <input placeholder="Preço unitário" required type="number" name="preco" id="preco" onChange={(e) => setValues({...values, preco: e.target.value})}></input>
              </div>

              <div className={styles.btnPost}>
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
          <div className={styles.btnsAdd}>
          <div className={styles.btnRoutes}>
          <Link to={"/"}>
            <button className={styles.btnHome}>Home</button>
          </Link>
        </div>
        <div className={styles.btnRoutes}>
          <Link to={"/buscar"}>
            <button>Buscar</button>
          </Link>
        </div>
        </div>
        </div>
      </main>
    <Footer/>
      </div>
  );
}
