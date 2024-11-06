import { useEffect, useState } from "react";
import axios from "axios";
import * as styles from "./Search.module.css";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import FooterSearch from "../../components/FooterSearch";

export default function Search() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, serQuantidade] = useState("");
  const [preco, setPreco] = useState(0.0);
  const [produto, setProduto] = useState([]);
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBusca(e.target.value);
  };

  const listaProdutos = () => {
    axios
      .get("https://6722c0692108960b9cc578da.mockapi.io/produtos")
      .then((response) => {
        setProduto(response.data);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  };

  useEffect(() => {
    listaProdutos();
  }, []);

  const produtosFiltrados = produto.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="Busca">
        <h2>Produtos em estoque:</h2>
        <div className={styles.btnsAdd}>
          <div className={styles.btnRoutes}>
            <Link to={"/"}>
              <button className={styles.btnHm}>Home</button>
            </Link>
          </div>
        </div>
        <input
          type="text"
          value={busca}
          onChange={handleInputChange}
          placeholder="Digite o nome do produto"
          className={styles.search}
        />
        <ul className="listaProduto">
          {produtosFiltrados.map((produto) => (
            <li key={produto.id} className="listaItens">
              Nome: {produto.nome}
              <br />
              Categoria: {produto.categoria}
              <br />
              Quantidade: {produto.quantidade}
              <br />
              R$: {produto.preco}
              <br />
              <div className={styles.btnRoutes}>
                <Link to={`/modificar/${produto.id}`}>
                  <button className={styles.btnAtualizar}>Atualizar</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <FooterSearch />
    </div>
  );
}
