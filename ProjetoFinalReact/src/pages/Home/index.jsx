import React, { useEffect, useRef, useState } from "react";
import * as styles from "./Home.module.css";
import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Ecoo from "../../assets/Eco+.jpg";
import Cliente from "../../assets/Cliente.webp";
import Equipe from "../../assets/Equipe.webp";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [item, setItem] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios
      .get("https://6722c03a2108960b9cc57713.mockapi.io/mercado")
      .then((response) => {
        setItem(response.data);
      })
      .catch(() => console.log("Problemas na requisição"));
      
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <img src={Ecoo} alt="" />
            <div className={styles.textOverlay}>
              Desde 1980, sempre evoluindo com você.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <img src={Cliente} alt="" />
            <div className={styles.textOverlay}>
              Clientes satisfeitos são nossa maior conquista.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <img src={Equipe} alt="" />
            <div className={styles.textOverlay}>
              Nossa equipe sempre pronta para te ajudar!
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <h3 className={styles.text}>Adicionados recentemente:</h3>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={false}
        slidesPerView={screenWidth < 768 ? 1 : 3}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 100,
          depth: 300,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {item.slice(-5).map((item) => (
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <h2 className={styles.cardtitle}>{item.nome}</h2>
                <p className={styles.descricao}>Categoria: {item.categoria}</p>
                <p className={styles.descricao}>Quantidade: {item.quantidade}</p>
                <p className={styles.descricao}>Preço: ${item.preco}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className={styles.text}>
        Bem-vindo ao nosso supermercado vegano! Explore o site e descubra como é
        fácil gerenciar nossos produtos e acompanhar novidades exclusivas.
        Utilize os botões abaixo para acessar as principais funcionalidades:
        adicione novos itens ao nosso catálogo, atualize informações de produtos
        já existentes ou faça uma busca para encontrar rapidamente aquilo que
        você precisa.
      </h3>

      <div className={styles.btnRoutes}>
        <Link to="/buscar">
        <button>Buscar</button>
        </Link>

        <Link to="/adicionar">
        <button>Adicionar</button>
        </Link>

        <Link to="/modificar">
        <button>Atualizar</button>
        </Link>
      </div>
    </div>
  );
}
