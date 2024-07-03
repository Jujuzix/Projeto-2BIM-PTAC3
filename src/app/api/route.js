import { NextResponse } from "next/server";

export const listaSuplementos = [
    {
        id: 1,
        titulo: "DOSE WHEY PROTEIN, SABOR CHOCOLATE",
        preco: "R$ 3,69",
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_dose-whey-protein-concentrado-30gr-growth-supplements-6.webp"
        
        
    },
    {
        id: 2,
        titulo: "Alfajor com Whey Protein",
        preco: "R$ 63,00",
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_alfajor-com-whey-protein-growth-display-c-6un-4.webp"  
    },
    {
        id: 3,
        titulo: "",
        preco: "",
        image: ""  
    },
    {
        id: 4,
        titulo: "",
        preco: "",
        image: ""  
    },
    {
        id: 5,
        titulo: "",
        preco: "",
        image: ""  
    }
];

export async function GET(){
    return NextResponse.json(listaSuplementos)
}