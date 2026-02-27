const produtos = [
    { id: 1, nome: "Disparervilha Inspirado Pvz", preco: 19.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mkin905algcg5e.webp" },
    { id: 2, nome: "Flor Tulipa Estilo Minecraft", preco: 10.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mkin905ekq9uec.webp" },
    { id: 3, nome: "Porta-copos Estilo LEGO", preco: 35.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zun-mkjt97cqfuv47d.webp" },
    
    { id: 4, nome: "Fidget Cubo Infinito", preco: 9.20, img: "https://down-br.img.susercontent.com/br-11134207-81zue-mko8gmu5h8ubc7"},
    { id: 5, nome: "Porta-Copos Folha Monstera", preco: 4.90, img: "https://down-br.img.susercontent.com/br-11134207-81zub-mko9od5z708x37" },
    { id: 6, nome: "Tubarão Articulado Brinquedo", preco: 6.80, img: "https://down-br.img.susercontent.com/br-11134207-81zu5-mko9od5ze135c7" },

    { id: 7, nome: "Dinossauro Rex Articulado", preco: 9.50, img: "https://down-br.img.susercontent.com/br-11134207-81zu7-mkoa4s3st4hva1"},
    { id: 8, nome: "Shuriken Fidget Spinner 3D", preco: 16.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81zug-mku5se7ejgg128.webp"},
    { id: 9, nome: "Fidget Trevo da Sorte 4 Folhas", preco: 15.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zuh-ml5ksgmnhhxj68.webp" },

    { id: 10, nome: "Infinity Fidget Antiestresse", preco: 19.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81zul-ml5mzqwbo6x2af@resize_w450_nl.webp"},
    { id: 11, nome: "Brinquedo Shark Flexível", preco: 10.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81ztg-ml5ox1qk7ojpf2@resize_w450_nl.webp"},
    { id: 12, nome: "Chaveiro de Gato Cute", preco: 2.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zts-ml5ox1qinhty9c.webp" },
];

const produtosf = [
    {
        id: 1,
        nome: "Disparervilha Inspirado Pvz",
        preco: 19.90,
        custos: { filamentoGramas: 43, tempoHoras: 2.5, plus: 0, embalagem: 1 }
    },
    {
        id: 2,
        nome: "Flor Tulipa Estilo Minecraft",
        preco: 10.50,
        custos: { filamentoGramas: 25.5, tempoHoras: 1.3, plus: 0, embalagem: 1 }
    },
    {
        id: 3,
        nome: "Porta-copos Estilo LEGO",
        preco: 35.90,
        custos: { filamentoGramas: 150.4, tempoHoras: 5.2, plus: 0, embalagem: 1 }
    },
    {
        id: 4,
        nome: "Fidget Cubo Infinito",
        preco: 9.20,
        custos: { filamentoGramas: 29.5, tempoHoras: 1.3, plus: 0, embalagem: 1 }
    },
    {
        id: 5,
        nome: "Porta-Copos Folha Monstera",
        preco: 4.90,
        custos: { filamentoGramas: 10.8, tempoHoras: 1, plus: 0, embalagem: 1 }
    },
    {
        id: 6,
        nome: "Tubarão Articulado Brinquedo",
        preco: 6.80,
        custos: { filamentoGramas: 20.5, tempoHoras: 1.4, plus: 0, embalagem: 1 }
    },
    {
        id: 7,
        nome: "Dinossauro Rex Articulado",
        preco: 9.50,
        custos: { filamentoGramas: 15.6, tempoHoras: 1, plus: 0, embalagem: 1 }
    },
    {
        id: 8,
        nome: "Shuriken Fidget Spinner 3D",
        preco: 16.50,
        custos: { filamentoGramas: 9, tempoHoras: 0.5, plus: 0, embalagem: 1 }
    },
    {
        id: 9,
        nome: "Fidget Trevo da Sorte 4 Folhas",
        preco: 15.90,
        custos: { filamentoGramas: 27.3, tempoHoras: 1, plus: 0, embalagem: 1 }
    },
    {
        id: 10,
        nome: "Infinity Fidget Antiestresse",
        preco: 19.50,
        custos: { filamentoGramas: 5.9, tempoHoras: 0.5, plus: 0, embalagem: 1 }
    },
    {
        id: 11,
        nome: "Brinquedo Shark Flexível",
        preco: 10.50,
        custos: { filamentoGramas: 4.8, tempoHoras: 0.3, plus: 0, embalagem: 1 }
    },
    {
        id: 12,
        nome: "Chaveiro de Gato Cute",
        preco: 2.90,
        custos: { filamentoGramas: 1.8, tempoHoras: 0.1, plus: 0.30, embalagem: 1 }
    }
];

function formatar(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}