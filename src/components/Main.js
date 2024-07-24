"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/main.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner.js";
import ErrorFetch from "./ErrorFetch";
<<<<<<< Updated upstream
import { listaSuplementos } from "../app/api/route";

export default function Main() {
  /* Estados*/ 
=======
import { listaSuplementos } from "@/app/api/route";

export default function Main() {
>>>>>>> Stashed changes
  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplet] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false);

<<<<<<< Updated upstream
  useEffect(() => { 
    /*buscar dados da api*/ 
    const getProduct = async () => {
      /* try e catch vão fazer o tratamento de erros, caso ocorra algum na execução */
      try {
        /* requisição HTTP para a url utilizando o fetch*/
        /* wait faz o código ter uma espera, até que a requisição seja concluida  */
        const response = await fetch("http://localhost:3000/api");
        /* converte para JSON*/
        const data = await response.json();
        /* atualiza com os dados da api*/
        setListProduct(data);
        setListComplet(data);
      } catch {
        /* se ocorrer algum erro  durante a requisição, vai ser executado e irá aparecer */
=======
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setListProduct(data);
        setListComplet(data);
      } catch {
>>>>>>> Stashed changes
        setIsError(true);
      }
    };
    getProduct();
  }, []);

  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) =>
<<<<<<< Updated upstream
      /* compara duas strings */
      a.titulo.localeCompare(b.titulo)
=======
      a.title.localeCompare(b.title)
>>>>>>> Stashed changes
    );

    setListProduct(listAux);
  };

  const orderZa = () => {
    const listAux = [...listProduct].reverse((a, b) =>
<<<<<<< Updated upstream
       /* compara duas strings */
      b.titulo.localeCompare(a.titulo)
=======
      b.title.localeCompare(a.title)
>>>>>>> Stashed changes
    );
    setListProduct(listAux);
  };

  const orderPrecoMenor = () => {
<<<<<<< Updated upstream
    /* a função de comparação garante a ordem dos produdos do men para maio */
    const listPre = [...listProduct].sort((a, b) => a.preco - b.preco);
=======
    const listPre = [...listProduct].sort((a, b) => a.price - b.price);

>>>>>>> Stashed changes
    setListProduct(listPre);
  };

  const orderPrecoMaior = () => {
<<<<<<< Updated upstream
    /* a função de comparação garante a ordem dos produdos do men para maio */
    const listPre = [...listProduct].reverse((a, b) => b.preco - a.preco);
=======
    const listPre = [...listProduct].reverse((a, b) => b.price - a.price);

>>>>>>> Stashed changes
    setListProduct(listPre);
  };

  const search = (text) => {
    setTextSearch(text);

    if (text.trim() == "") {
      setListProduct(listComplete);
      return;
    }
    const newList = listProduct.filter((product) =>
<<<<<<< Updated upstream
      product.titulo
=======
      product.title
>>>>>>> Stashed changes
        .toUpperCase()
        .trim()
        .includes(textSearch.toUpperCase().trim())
    );
    setListProduct(newList);
  };
  if (isError == true) {
<<<<<<< Updated upstream
    /* se dentro da operação der erro na busca dos dados da api, será exibido uma mensagem de erro ao usuário */
=======
>>>>>>> Stashed changes
    return <ErrorFetch />;
  }

  if (listComplete[0] == null) {
    return <Spinner />;
  }
  console.log(listProduct);
  return (
    <>
      <div className={styles.filters}>
        <div>
<<<<<<< Updated upstream
          <input 
          className={styles.buscar}
=======
          <input
>>>>>>> Stashed changes
            type="text"
            value={textSearch}
            placeholder="Faça uma Pesquisa de Algum Produto"
            onChange={(event) => search(event.target.value)}
          />
          <button onClick={orderAz} className={styles.btn}>
            A - Z
          </button>
          <button onClick={orderZa} className={styles.btn}>
            Z - A
          </button>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
          <button onClick={orderPrecoMaior} className={styles.btn}>
            {" "}
            Preço Maior
          </button>
          <button onClick={orderPrecoMenor} className={styles.btn}>
            {" "}
            Preço Menor
          </button>
        </div>
      </div>

      <main className={styles.main}>
        {listProduct.map((products) => (
          <div className={styles.alinhamento}>
            <div className={styles.card} key={products.id}>
<<<<<<< Updated upstream
              <h1>{products.titulo.slice(0, 25) + "..."}</h1>
              <Image width={300} height={300} src={products.image} />
              <h3>{products.preco}</h3>
              <p>{products.descr.slice(0, 25) + "..."}</p>
              <Link href={"/product/" + products.id}>
              <button className={styles.btn}>Ver mais sobre</button>
                </Link>
=======
              <h1>{products.titulo}</h1>
              <Image width={300} height={300} src={products.image} />
              <h3>{products.preco}</h3>
              <p>{products.descr}</p>
>>>>>>> Stashed changes
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
