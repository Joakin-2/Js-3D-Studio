const produtos = [
    { id: 1, nome: "Disparervilha Inspirado Pvz", preco: 24.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mkin905algcg5e.webp" },
    { id: 2, nome: "Flor Tulipa Estilo Minecraft", preco: 16.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mkin905ekq9uec.webp" },
    { id: 3, nome: "Porta-copos Estilo LEGO", preco: 42.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zun-mkjt97cqfuv47d.webp" },
    
    { id: 4, nome: "Fidget Cubo Infinito", preco: 15.20, img: "https://down-br.img.susercontent.com/br-11134207-81zue-mko8gmu5h8ubc7"},
    { id: 5, nome: "Porta-Copos Folha Monstera", preco: 8.90, img: "https://down-br.img.susercontent.com/br-11134207-81zub-mko9od5z708x37" },
    { id: 6, nome: "Tubarão Articulado Brinquedo", preco: 12.80, img: "https://down-br.img.susercontent.com/br-11134207-81zu5-mko9od5ze135c7" },

    { id: 7, nome: "Dinossauro Rex Articulado", preco: 9.50, img: "https://down-br.img.susercontent.com/br-11134207-81zu7-mkoa4s3st4hva1"},
    { id: 8, nome: "Shuriken Fidget Spinner 3D", preco: 16.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81zug-mku5se7ejgg128.webp"},
    { id: 9, nome: "Fidget Trevo da Sorte 4 Folhas", preco: 15.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zuh-ml5ksgmnhhxj68.webp" },

    { id: 10, nome: "Infinity Fidget Antiestresse", preco: 19.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81zul-ml5mzqwbo6x2af@resize_w450_nl.webp"},
    { id: 11, nome: "Brinquedo Shark Flexível", preco: 10.50, img: "https://down-br.img.susercontent.com/file/br-11134207-81ztg-ml5ox1qk7ojpf2@resize_w450_nl.webp"},
    { id: 12, nome: "Chaveiro de Gato Cute", preco: 6.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zts-ml5ox1qinhty9c.webp" },

    { id: 13, nome: "Cubo Infinito de Decoração", preco: 16.90, img: "cube.png"},
    { id: 14, nome: "Egg Fidget Toy", preco: 9.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lf-mlpehodbxqme6e@resize_w450_nl.webp"},
    { id: 15, nome: "Peeps Easter Slider Flip", preco: 12.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lc-mlplcwygcvt0dc@resize_w450_nl.webp" },

    { id: 16, nome: "Raposa do Ártico Minimalista", preco: 10.80, img: "https://down-br.img.susercontent.com/file/br-11134207-820l5-mlplcwygfoxwfc.webp"},
    { id: 17, nome: "Fidget Giroscópio 4 Anéis", preco: 10.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820m1-mly2bt9c30939d@resize_w450_nl.webp"},
    { id: 18, nome: "Flores Minecraft Decorativas", preco: 79.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820lb-mly72z7s4jk4a0.webp" },

    { id: 19, nome: "Flor Papoula do Minecraft", preco: 30.20, img: "https://down-br.img.susercontent.com/file/br-11134207-820lo-mly72z7w9fr4d3.webp"},
    { id: 20, nome: "Flor Dente-de-leão do Mine", preco: 29.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lm-mly72z7w816oc6.webp"},
    { id: 21, nome: "Flor Margarida do Minecraft", preco: 30.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820ls-mly72z7waubk0f.webp" },

    { id: 22, nome: "Mini Kit 3 Slimes Minecraft", preco: 12.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lo-mly8glcow74065.webp"},
    { id: 23, nome: "Jacaré Articulado BiteCroc", preco: 12.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820l5-mly9rag5wnif82@resize_w450_nl.webp"},
    { id: 24, nome: "Óculos Pixel Minecraft", preco: 22.60, img: "https://down-br.img.susercontent.com/file/br-11134207-820ma-mly9rag652x382.webp" },

    //new { id: 25, nome: "Papagaio do Minecraft 3D", preco: 56.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lu-mlz5h9svnk07f1.webp},
    //new { id: 26, nome: "Galinha do Minecraft 3D", preco: 45.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820ly-mlz5h9svf4lj6c.webp"},
    //new { id: 27, nome: "Suporte de Celular de Mesa", preco: 18.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820m7-mmayuf68c83q05.webp" },

    //new { id: 28, nome: "Kit com 10 Prendedores", preco: 18.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lk-mmxicqyhxlhd80@resize_w450_nl.webp"},
    //new { id: 29, nome: "Escultura de Jesus 3D", preco: 31.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820l8-mmxicqy6xhc1a7.webp"},
    //{ id: 30, nome: "Flores Minecraft Decorativas", preco: 69.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820lb-mly72z7s4jk4a0.webp" },

    //{ id: 31, nome: "Flor Papoula do Minecraft", preco: 26.20, img: "https://down-br.img.susercontent.com/file/br-11134207-820lo-mly72z7w9fr4d3.webp"},
    //{ id: 32, nome: "Flor Dente-de-leão do Mine", preco: 25.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lm-mly72z7w816oc6.webp"},
    //{ id: 33, nome: "Flor Margarida do Minecraft", preco: 26.90, img: "https://down-br.img.susercontent.com/file/br-11134207-820ls-mly72z7waubk0f.webp" },

    //{ id: 34, nome: "Mini Kit 3 Slimes Minecraft", preco: 12.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820lo-mly8glcow74065.webp"},
    //{ id: 35, nome: "Jacaré Articulado BiteCroc", preco: 12.50, img: "https://down-br.img.susercontent.com/file/br-11134207-820l5-mly9rag5wnif82@resize_w450_nl.webp"},
    //{ id: 36, nome: "Chaveiro de Gato Cute", preco: 2.90, img: "https://down-br.img.susercontent.com/file/br-11134207-81zts-ml5ox1qinhty9c.webp" },
];

const produtosf = [
    {
        id: 1,
        nome: "Disparervilha Inspirado Pvz",
        preco: 24.90,
        custos: { filamentoGramas: 43, tempoHoras: 2.5, plus: 0, embalagem: 3 }
    },
    {
        id: 2,
        nome: "Flor Tulipa Estilo Minecraft",
        preco: 16.50,
        custos: { filamentoGramas: 25.5, tempoHoras: 1.3, plus: 0, embalagem: 2 }
    },
    {
        id: 3,
        nome: "Porta-copos Estilo LEGO",
        preco: 42.90,
        custos: { filamentoGramas: 150.4, tempoHoras: 5.2, plus: 0, embalagem: 4 }
    },
    {
        id: 4,
        nome: "Fidget Cubo Infinito",
        preco: 15.20,
        custos: { filamentoGramas: 29.5, tempoHoras: 1.3, plus: 0, embalagem: 1 }
    },
    {
        id: 5,
        nome: "Porta-Copos Folha Monstera",
        preco: 8.90,
        custos: { filamentoGramas: 10.8, tempoHoras: 1, plus: 0, embalagem: 1 }
    },
    {
        id: 6,
        nome: "Tubarão Articulado Brinquedo",
        preco: 12.80,
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
        preco: 6.90,
        custos: { filamentoGramas: 1.8, tempoHoras: 0.1, plus: 0.30, embalagem: 1 }
    },
    {
        id: 13,
        nome: "Cubo Infinito de Decoração",
        preco: 16.90,
        custos: { filamentoGramas: 23.33, tempoHoras: 1.8, plus: 0, embalagem: 1 }
    },
    {
        id: 14,
        nome: "Egg Fidget Toy",
        preco: 9.50,
        custos: { filamentoGramas: 14.37, tempoHoras: 0.7, plus: 0, embalagem: 1 }
    },
    {
        id: 15,
        nome: "Peeps Easter Slider Flip",
        preco: 12.50,
        custos: { filamentoGramas: 11, tempoHoras: 0.5, plus: 0, embalagem: 1 }
    },
    {
        id: 16,
        nome: "Raposa do Ártico Minimalista",
        preco: 10.80,
        custos: { filamentoGramas: 8.77, tempoHoras: 0.8, plus: 0, embalagem: 1 }
    },
    {
        id: 17,
        nome: "Fidget Giroscópio 4 Anéis",
        preco: 10.50,
        custos: { filamentoGramas: 10, tempoHoras: 0.5, plus: 0, embalagem: 1 }
    },
    {
        id: 18,
        nome: "Flores Minecraft Decorativas",
        preco: 79.90,
        custos: { filamentoGramas: 267.05, tempoHoras: 10.4, plus: 0, embalagem: 5 }
    },
    {
        id: 19,
        nome: "Flor Papoula do Minecraft",
        preco: 30.20,
        custos: { filamentoGramas: 86.79, tempoHoras: 3.5, plus: 0, embalagem: 3 }
    },
    {
        id: 20,
        nome: "Flor Dente-de-leão do Mine",
        preco: 28.50,
        custos: { filamentoGramas: 88.97, tempoHoras: 3.4, plus: 0, embalagem: 3 }
    },
    {
        id: 21,
        nome: "Flor Margarida do Minecraft",
        preco: 30.90,
        custos: { filamentoGramas: 91.27, tempoHoras: 3.5, plus: 0, embalagem: 3 }
    },
    {
        id: 22,
        nome: "Mini Kit 3 Slimes Minecraft",
        preco: 12.50,
        custos: { filamentoGramas: 21.3, tempoHoras: 1.3, plus: 0, embalagem: 1 }
    },
    {
        id: 23,
        nome: "Jacaré Articulado BiteCroc",
        preco: 12.50,
        custos: { filamentoGramas: 13.17, tempoHoras: 1.1, plus: 0, embalagem: 1 }
    },
    {
        id: 24,
        nome: "Óculos Pixel Minecraft",
        preco: 22.60,
        custos: { filamentoGramas: 29.45, tempoHoras: 1.6, plus: 0, embalagem: 4 }
    },
    {
        id: 25,
        nome: "Papagaio do Minecraft 3D",
        preco: 56.50,
        custos: { filamentoGramas: 210.2, tempoHoras: 8.3, plus: 0, embalagem: 5 }
    },
    {
        id: 26,
        nome: "Galinha do Minecraft 3D",
        preco: 45.90,
        custos: { filamentoGramas: 137, tempoHoras: 4.6, plus: 0, embalagem: 5 }
    },
    {
        id: 27,
        nome: "Suporte de Celular de Mesa",
        preco: 18.90,
        custos: { filamentoGramas: 37, tempoHoras: 1, plus: 0, embalagem: 2 }
    },
    {
        id: 28,
        nome: "Kit com 10 Prendedores",
        preco: 18.50,
        custos: { filamentoGramas: 48.1, tempoHoras: 2.2, plus: 0, embalagem: 1 }
    },
    {
        id: 29,
        nome: "Escultura de Jesus 3D",
        preco: 31.90,
        custos: { filamentoGramas: 63.6, tempoHoras: 3.3, plus: 0, embalagem: 2 }
    }
];

function formatar(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
