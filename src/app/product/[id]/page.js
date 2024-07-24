import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Product({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id);

    if (!response.ok) {
        console.error("Erro ao buscar dados da API");
        return (
            <div>
                <h1>Erro ao buscar dados do produto</h1>
            </div>
        );
    }

    const data = await response.json();
    return (
        <div className={styles.card}>
            <h1>{data.titulo}</h1>
            <Image width={300} height={300} src={data.image} />
            <p>R$:{data.preco}</p>
            <p>Descrição: {data.descr}</p>
            <Link href={"/"}>
            <button className={styles.btn}>Voltar a página principal </button>
            </Link>
        </div>
        
    );
}
