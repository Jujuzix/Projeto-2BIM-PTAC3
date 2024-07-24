"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/main.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner.js";
import ErrorFetch from "./ErrorFetch";

export default function Main() {
const [Product, setListProduct] = useState([]);
const [listComplete, setListComplet] = useState([]);
const [textSearch, setTextSearch] = useState("");
const [isError, setIsError] = useState(false);

useEffect(() => {
    const getProduct = async () => {
    try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setListProduct(data);
        setListComplet(data);
    } catch {
        setIsError(true);
    }
    };
    getProduct();
}, []);

const Az = () => {
    const listAux = [...Product].sort((a, b) => 
        a.title.localeCompare(b.title)
    );

    setListProduct(listAux);
};

const Za = () => {
    const listAux = [...Product].reverse((a, b) => 
        b.title.localeCompare(a.title)
    );

    setListProduct(listAux);
};

const orderPrecoMenor = () => {
    const listPre = [...Product].sort((a, b) => a.prince - b.prince);

    setListProduct(listPre);
};

const orderPrecoMaior = () => {
    const listPre = [...Product].reverse((a, b) => b.prince - a.prince);

    setListProduct(listPre);
};

const search = (text) => {
    setTextSearch(text); 

    if (text.trim() == ""){
        setListProduct(listComplete);
        return;
    }
    const newList = listProduct.filter((product) =>
    product.title
      //metodo que transforma string em letras maiúsculas 
        .toUpperCase()
        //metodo que remove espaços em branco
        .trim()
        //utilizado para determinar uma string ou valor
        .includes(textSearch.ToUpperCase().trim())
    );
    setListProduct(newList);
};
if (isError == true) {
    return <ErrorFetch/>;
}

if (listComplete[0] == null) {
    return <Spinner />;
}

return(
    <>
        <div className={styles.filters}>
        <div>
        <input
            type="text"
            value={textSearch}
            placeholder="Faça uma Pesquisa de Algum Produto"
            onChange={(event) => search(event.target.value)}
        />
        <button onClick={Az} className={styles.btn}>
            A - Z
        </button>
        <button onClick={Za} className={styles.btn}>
            Z - A
        </button>

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
        {Product.map((products) => (
        <div className={styles.card} key={products.id}>
            <h1>{products.titulo}</h1>
            <Image width={300} height={300} src={products.image} />
            <h3>{products.preco}</h3>
            <p>{products.descr.slice(0, 25) + "..."}</p>
            <Link href={"/product/" + products.id}>
            <button className={styles.btn}>Ver mais sobre</button>
            </Link>
        </div>
        ))}
    </main>
    </>
)
}
