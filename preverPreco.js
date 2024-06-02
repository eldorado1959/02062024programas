
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let produtos = [];

function exibirMenu() {
    console.log("\nMenu:");
    console.log("[1] Cadastrar Produto");
    console.log("[2] Listar Produtos");
    console.log("[3] Prever Preço");
    console.log("[4] Sair");
    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao) {
            case '1':
                cadastrarProduto();
                break;
            case '2':
                listarProdutos();
                break;
            case '3':
                preverPreco();
                break;
            case '4':
                console.log("Programa encerrado.");
                rl.close();
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                exibirMenu();
                break;
        }
    });
}


function cadastrarProduto() {
    rl.question('Nome do produto: ', (nome) => {
        rl.question('Preço do produto: ', (preco) => {
            rl.question('Quantidade do produto: ', (quantidade) => {
                produtos.push({
                    nome: nome,
                    preco: parseFloat(preco),
                    quantidade: parseInt(quantidade)
                });
                console.log("Produto cadastrado com sucesso!");
                exibirMenu();
            });
        });
    });
}

function listarProdutos() {
    console.log("\nLista de Produtos Cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`Produto ${index + 1}: ${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`);
    });
    exibirMenu();
}


function preverPreco() {
    rl.question('Nome do produto para prever o preço: ', (nome) => {
        let produto = produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
        if (produto) {
            // Simulação de previsão de preço (aumentando 10% do preço atual)
            let precoPrevisto = produto.preco * 1.10;
            console.log(`Preço previsto para ${produto.nome} é: R$ ${precoPrevisto.toFixed(2)}`);
        } else {
            console.log("Produto não encontrado.");
        }
        exibirMenu();
    });
}


exibirMenu();


