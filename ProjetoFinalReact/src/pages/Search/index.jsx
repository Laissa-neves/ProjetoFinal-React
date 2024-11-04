import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.module.css";

export default function Search() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, serQuantidade] = useState("");
  const [preco, setPreco] = useState(0.0);
  const [produto, setProduto] = useState([]);

  const listaProdutos = () => {
    axios
      .get("https://6722c0452108960b9cc577b2.mockapi.io/Produtos")
      .then((response) => {
        setProduto(response.data);
      });
  };

  useEffect(() => {
    listaProdutos();
  }, []);

  return (
    <div>
      <div className="Busca">
        <h2>Produtos em stoque</h2>
        <ul className="listaProduto">
          {produto.map((produto) => (
            <li key={produto.id} className="listaItens">
              Nome: {produto.nome}
              <br />
              Categoria: {produto.categoria}
              <br />
              Quantidade: {produto.quantidade}
              <br />
              R$: {produto.preco}
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
