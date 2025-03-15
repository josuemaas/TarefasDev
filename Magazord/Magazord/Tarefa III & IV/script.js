const products = [
    {
        name: ' Celular ',
        price: 29.99,
        image: 'Imagens/celular.jpg',
        description: 'Descrição do Produto 1'
    },
    {
        name: 'Teclado',
        price: 49.99,
        image: 'Imagens/teclado.jpg',
        description: 'Descrição do Produto 2'
    },
    {
        name : 'Tablet',
        price: 19.99,
        image: 'Imagens/tablet.jpg',
        description: 'Descrição do Produto 3'
    },
    {
        name: 'Notebook',
        price: 99.99,
        image: 'Imagens/notebook.jpg',
        description: 'Descrição do Produto 4'
    },
    {
        name: 'Produto 5',
        price: 39.99,
        image: 'Imagens/celular.jpg',
        description: 'Descrição do Produto 5'
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