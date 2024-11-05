import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import * as styles from "./Modify.module.css";
import Footer from "../../components/Footer";

const validationProduct = yup.object().shape({
  nome: yup
    .string()
    .min(2, "O tamanho min. é 2 caracteres")
    .max(50, "O tamanho máx. é 50 caracteres"),
  categoria: yup
    .string()
    .min(4, "O tamanho min. é 4 caracteres")
    .max(50, "O tamanho máx. é 50 caracteres"),
});

export default function Modify() {
  const [produto, setProduto] = useState();
  const { id } = useParams();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationProduct) });

  useEffect(() => {
    axios
      .get(`https://6722c0692108960b9cc578da.mockapi.io/produtos/${id}`)
      .then((response) => {
        reset(response.data);
        setProduto(response.da)
      });
  }, []);

  const atualizar = (data) => {
    axios
      .put(`https://6722c0692108960b9cc578da.mockapi.io/produtos/${id}`, data)
      .then(() => {
        console.log("Produto Atualizado!");
        navigate("/buscar");
      })
      .catch(() => console.log("Erro na requisição"));
  };

  const deletar = (id) => {
    axios
      .delete(`https://6722c0692108960b9cc578da.mockapi.io/produtos/${id}`)
      .then(() => {
        console.log("Produto Deletado!");
        navigate("/buscar")
      })
      .catch(() => console.log("Erro na requisição"));
  };

  return (
    <div className={styles.general}>
      <Header />
      <main>
        <div className={styles.content}>
          <h2>Atualizar produto</h2>
          <div className={styles.cardBodyPost}>
            <form id="formulario" onSubmit={handleSubmit(atualizar)}>
              <div className={styles.fields}>
                <input
                  placeholder="Nome"
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  {...register("nome")}
                />
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>

              <div className={styles.fields}>
                <input
                  placeholder="Categoria"
                  required
                  type="text"
                  name="categoria"
                  id="categoria"
                  {...register("categoria")}
                />
                <p className={styles.errorMessage}>
                  {errors.categoria?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <input
                  placeholder="Quantidade"
                  required
                  type="number"
                  name="quantidade"
                  id="quantidade"
                  {...register("quantidade")}
                ></input>
                <p className={styles.errorMessage}>
                  {errors.quantidade?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <input
                  placeholder="Preço unitário"
                  required
                  name="preco"
                  id="preco"
                  {...register("preco")}
                ></input>
                <p className={styles.errorMessage}>{errors.preco?.message}</p>
              </div>

              <div className={styles.btnPost}>
                <button type="submit">Atualizar</button>
              </div>
            </form>
          </div>

          <div className={styles.btnsAdd}>
            <div className={styles.btnRoutes}>
              <Link to="/">
                <button className={styles.btnHome}>Página inicial</button>
              </Link>

              <Link to="/buscar">
                <button className={styles.btnHome}>Voltar</button>
              </Link>
              <button onClick={() => deletar(id)}>
                Deletar Produto
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
