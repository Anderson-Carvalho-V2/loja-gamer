export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    quantidadeEstoque: number;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 15 },
    { id: 2, descricao: "Monitor apple", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 12 },
    { id: 3, descricao: "Teclado mecanico", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Fone de ouvido pró", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Airpods apple", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Fone bluetooth ", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Placa de vídeo", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Macbook", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Notebook", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse azul", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse bluetooth", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mouse claw", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado tks", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 },
    { id: 16, descricao: "PlayStation 5", preco: 3500.99, descricaoPreco: "À vista no PIX", imagem: "./assets/PlayStation-5.jpg", quantidadeEstoque: 10 },
    { id: 17, descricao: "Cadeira gamer", preco: 1200.99, descricaoPreco: "À vista no PIX", imagem: "./assets/cadeira-Gamer.jpg", quantidadeEstoque: 10 },
    { id: 18, descricao: "Processador i5", preco: 1500.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador-i5.jpg", quantidadeEstoque: 10 },
]