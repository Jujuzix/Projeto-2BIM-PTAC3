import { NextResponse } from "next/server";

export const listaSuplementos = [
    {
        id: 1,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_dose-whey-protein-concentrado-30gr-growth-supplements-6.webp",
        titulo: "DOSE WHEY PROTEIN, SABOR CHOCOLATE",
        descr: "PRÁTICO PARA CONSUMO NO DIA-DIAAJUDA A FORNECER ENERGIA ALTA ABSORÇÃO PELO ORGANISMO",
        preco: "R$ 3,69"
    },
    {
        id: 2,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_alfajor-com-whey-protein-growth-display-c-6un-4.webp",
        titulo: "Alfajor com Whey Protein",
        descr: "BAIXO ÍNDICE GLICÊMICO FONTE DE PROTEÍNASUM DOCINHO SEM SAIR DA DIETA",
        preco: "R$ 63,00"
    },
    {
        id: 3,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_barra-de-prote-na-com-recheio-display-c-12-un-growth-supplements.webp",
        titulo: "Barra de Proteína com recheio",
        descr: "BAIXO ÍNDICE GLICÊMICO PROTEÍNAS DE ALTO VALOR BIOLÓGICOFONTE DE FIBRAS",
        preco: "R$ 43,20"
    },
    {
        id: 4,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_pa-oca-growth-display-com-12un-276gr-growth-supplements-1.webp",
        titulo: "Paçoca Growth com 12 un  ",
        descr: "FONTE DE ENERGIA SABOROSA AJUDA NA REGULAÇÃO DO HUMOR",
        preco: "R$ 22,50"
    },
    {
        id: 5,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_pasta-de-amendoim-sabor-beijinho-500g-growth-supplements.png",
        titulo: "Pasta de Amendoim Sabor Beijinho",
        descr: "SUBSTITUI UM DOCE ENERGIA PARA O TREINO FONTE NATURAL DE NUTRIENTES",
        preco: "25,20"
    },
    {
        id: 6,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_pr-treino-haze-hardcore-300gr-growth-supplements.png",
        titulo: "Pré Treino HAZE",
        descr: "MAIS DISPOSIÇÃO FORÇARESISTÊNCIA",
        preco: "R$ 103,50"
    },
    {
        id: 7,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_bebida-l-ctea-uht-de-prote-nas-growth-supplements.webp",
        titulo: "Bebida Láctea UHT de Proteínas",
        descr: "AJUDA NA HIPERTROFIA MELHOR CUSTO X BENEFÍCIOALTA CONCENTRAÇÃO DE PROTEÍNA",
        preco: "R$ 6,30"
    },
    {
        id: 8,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_wafer-protein-100gr-s-growth-supplements.png",
        titulo: "Wafer Protein",
        descr: "SUBSTITUI UM DOCE FONTE DE PROTEÍNAS AJUDA NO CONTROLE DO APETITE",
        preco: "R$ 10,80"
    },
    {
        id: 9,
        image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-monohidratada-250g-growth-supplements-1.webp",
        titulo: "Creatina Monohidratada 250g",
        descr: "ESTIMULA A HIPERTROFIA AUXILIA A RECUPERAÇÃO MUSCULAR AUMENTO DE FORÇA",
        preco: "R$ 79,92"
    },
    {
        id: 10,
        image: "https://cdn.awsli.com.br/600x450/272/272693/produto/217669296/combo-mukebar-sabores-lcmhn7n1g3.png",
        titulo: "COMBO MUKEBAR +MU PERFORMANCE (5 CAIXAS SABORES MISTOS - 60 UNI.) - 3600G",
        descr: "A gente recomenda comer a sua Mukebar durante o pós-treino! Afinal, ela é uma ótima opção pra te ajudar na recuperação muscular e não correr o risco de jogar seu treino no lixo! =)",
        preco: "R$ 789,99"
    },
    {
        id: 11,
        image: "https://cdn.awsli.com.br/600x450/272/272693/produto/237672484/capa-exquenta-500--2--uwlv8xle4c.png",
        titulo: "COMBO EXQUENTA 500G (ESCOLHA O SABOR) + CREATINA +MU PERFORMANCE - 200G",
        descr: "O Exquenta +Mu Performance é o nosso famoso pré-treino! Ele está inserido dentro dos nossos produtos focados em performance e contém ingredientes selecionados carinhosamente para te ajudar a dar aquela acelerada maneira no metabolismo, tirar a sensação de fadiga e sem taquicardia! ",
        preco: "R$ 296,98"
    },
    {
        id: 12,
        image: "https://cdn.awsli.com.br/600x450/272/272693/produto/262508485/display-sach--ga-goes-dxzd7mzh1p.png",
        titulo: "EXQUENTA STAY NATTY - PRÉ-TREINO EM SACHÊ - GREEN APPLE (15 SACHÊS COM 7,5G CADA) - 112,5G",
        descr: "WOW, LOOK AT HIM O Exquenta Stay Natty é o nosso pré-treino e nossa mais nova estrela quando o assunto é performance! Ele contém ingredientes carinhosamente selecionados que vão te ajudar a dar aquela acelerada maneira no metabolismo e tirar a sensação de fadiga. É isso aí kid, não perca tempo!!! Experimente já o pré-treino Exquenta Stay Natty, disponível nos sabores Pineapple 🍍 (abacaxi para os íntimos) e Green Apple 🍏 (maça verde dos campeões).",
        preco: "R$ 134,85"
    },
    {
        id: 13,
        image: "https://cdn.awsli.com.br/600x450/272/272693/produto/272422652/mockup_display_mukebar_chocolatecomavel-_comsombra-qgbyamr4cb.png",
        titulo: "MUKEBAR CHOCOLATE COM AVELÃ +MU PERFORMANCE - CAIXA COM 12 UNIDADES - 720G",
        descr: "A gente recomenda comer a sua Mukebar durante o pós-treino! Afinal, ela é uma ótima opção pra te ajudar na recuperação muscular e não correr o risco de jogar seu treino no lixo! =)",
        preco: "R$ 185,88"  
    },
    {
        id: 14,
        image: "https://cdn.awsli.com.br/600x450/272/272693/produto/182281584/e2de63364f.jpg",
        titulo: "COMBO CHOCOWHEYFER BITES - (3 CAIXAS SABORES MISTOS - 36 UNI.) - 1260G",
        descr: "Ahhh! E o melhor: como ele é proteico, não atrapalha em nada a nossa rotina de alimentação! Pelo contrário, além de matar a fominha da tarde, ele também nos ajuda a manter a alimentação equilibrada, já que não saímos por aí comendo tudo o que vemos pela frente na próxima refeição! =)",
        preco: "R$ 307,47"  
    },
    {
        id: 15,
        image: "https://cdn.awsli.com.br/600x450/272/272693/produto/220292232/cappuccino-vanilla-leibx96xca.png",
        titulo: "CAPPUCCINO +MU (COM WHEY) - VANILLA LATTE - 200G",
        descr: "Quer um bom motivo pra ser feliz logo de manhã? Então, vem provar o Cappuccino Vanilla Latte com whey e canela da +Mu! 😜💙🐮",
        preco: "R$ 59,99"
    }
];

export async function GET(){
    return NextResponse.json(listaSuplementos)
}