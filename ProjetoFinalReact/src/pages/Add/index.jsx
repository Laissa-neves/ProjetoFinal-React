import React, { useState } from "react";
import * as styles from "./Add.module.css";
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape(
  {
    nome: yup.string().min(2,"O tamanho min. é 2 caracteres").max(50, "O tamanho máx. é 50 caracteres"),
    categoria:yup.string().min(4,"O tamanho min. é 4 caracteres").max(50, "O tamanho máx. é 50 caracteres"),
  }
)

export default function Add() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({resolver:yupResolver(validationPost)});

  const post = (data) => {
    axios.post('https://6722c0692108960b9cc578da.mockapi.io/produtos', data)
         .then((res) => {
            console.log(res);
            reset();
            alert("Produto cadastrado com sucesso!");
        })
        .catch((erro) => {
          console.log(erro);
          alert("Erro ao cadastrar produto");
          })
            
  };

  return (
    <div className={styles.general}>
    <Header />
      <main>
        <div className={styles.content}>
          <h2>Cadastrar produto</h2>
          
          <div className={styles.cardBodyPost}>
            <form id="formulario" onSubmit={handleSubmit(post)}>
              
              <div className={styles.fields}>
                <input placeholder="Nome" required type="text" name="nome" id="nome" {...register("nome")}/>
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>

              <div className={styles.fields}>
                <input placeholder="Categoria" required type="text" name="categoria" id="categoria" {...register("categoria")} />
                <p className={styles.errorMessage}>{errors.categoria?.message}</p>
              </div>

              <div className={styles.fields}>
                <input placeholder="Quantidade" required type="number" name="quantidade" id="quantidade" {...register("quantidade")}></input>
                <p className={styles.errorMessage}>{errors.quantidade?.message}</p>
              </div>

              <div className={styles.fields}>
                <input placeholder="Preço unitário" required name="preco" id="preco" {...register("preco")}></input>
                <p className={styles.errorMessage}>{errors.preco?.message}</p>
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