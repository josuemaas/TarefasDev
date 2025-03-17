const products = [
    {
        name: ' Celular ',
        price: 3.500,
        image: 'Imagens/celular.jpg',
        description: 'Processador veloz, câmera de alta resolução e tela vibrante para uma navegação fluida.'
    },
    {
        name: 'Teclado',
        price: 200.20,
        image: 'Imagens/tecladogamer.jpg',
        description: 'Mecânico ou membrana, com resposta rápida e iluminação RGB para uma experiência incrível.'
    },
    {
        name : 'Tablet',
        price: 2.100,
        image: 'Imagens/tablet.jpg',
        description: 'Leve e versátil, ideal para entretenimento, estudos e produtividade em qualquer lugar.'
    },
    {
        name: 'Notebook',
        price: 3.800,
        image: 'Imagens/notebook.jpg',
        description: 'Alto desempenho para trabalho, estudos ou games, com bateria duradoura e design moderno.'
    },
    {
        name: 'Cadeira Gamer',
        price: 900.00,
        image: 'Imagens/cadeira.jpg',
        description: 'Conforto e ergonomia para longas horas de jogo ou trabalho, com ajuste de altura e inclinação.'
    },
];

let cartCount = 0;

function renderProductList() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Limpa o conteúdo anterior

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="showProductDetail(${index})">Ver Detalhes</button>
        `;
        mainContent.appendChild(productDiv);
    });
}

function addToCart(index) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${products[index].name} foi adicionado ao carrinho!`);
}

function showProductDetail(index) {
    const product = products[index];
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="detail-view">
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto;">
            <p><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${index})">Adicionar ao Carrinho</button>
            <button onclick="renderProductList()">Voltar</button>
        </div>
    `;
}

document.getElementById('theme-selector').addEventListener('change', (event) => {
    document.body.setAttribute('data-theme', event.target.value);
});

// Renderiza a lista de produtos ao carregar a página
renderProductList(); 