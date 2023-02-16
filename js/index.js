
let activeTabId = 'cart';
const goodsInCart = [];
const initialTab = getActiveTab();
initialTab.classList.add('active');
const tabs = document.querySelectorAll('button.tab');
renderTabContentById(activeTabId)

function clickHandler(event) {
    const activeTab = getActiveTab();

    activeTab.classList.remove('active');
    event.target.classList.add('active');
    activeTabId = event.target.dataset.tabId;
    removeActiveTabContent()

    renderTabContentById(activeTabId)
};
for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    tab.addEventListener('click', clickHandler);
}
function getActiveTab() {
    return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
};
function removeActiveTabContent() {
    const activeContent = document.querySelector(`[data-active-tab-content="true"]`);
    activeContent.remove();
};

function renderTabContentById(tabId) {
    const tabsContainer = document.querySelector('.tabs');
    let html = null;
    if (tabId === 'goods') {
        html = renderGoods();
    } else {
        html = renderCart();
    };
    if (html !== null) {
        tabsContainer.after(html);
    }
};
function renderGoods() {
    const div = document.createElement('div');
    div.dataset.activeTabContent = 'true';
    div.className = 'product-items';


    for (let i = 0; i < GOODS.length; i++) {
        const product = createProduct(GOODS[i]);
        const price = product.price === null
            ? '<p>Товар закончился</p>'
            : `<p class = "price">${product.price}</p>`;

        const productBlock = document.createElement('div');
        productBlock.className = 'product-item';

        productBlock.innerHTML = `
    <div class="image">
    <img src="${product.imgSrc}" alt="">
    </div>
    <div class="product-list">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    </div>
    `;
        if (product.price !== null) {
            const clickHander = addInCartHandler(product);
            const button = document.createElement('button')
            button.className = 'button';
            button.textContent = 'Add to cart';
            button.addEventListener('click', clickHander);
            productBlock.querySelector('.product-list').append(button);
        }
        div.append(productBlock)
    }
    return div;
};

const tabWithCounter = document.querySelector('button[data-goods-count="0"]');


function addInCartHandler(product) {
    return () => {
        let hasProduct = false;
        let index = null;
        let count = 1;
        for(let i = 0; i < goodsInCart.length; i++) {
            const productInCart = goodsInCart[i];
            if (product.id === productInCart.id) {
                hasProduct = true;
                index = i;
                count = productInCart.count;
            }
        }
        if(hasProduct) {
            goodsInCart[index].count= count + 1;
        }
        else {
            const productWithCount = product ;
            productWithCount.count = count;
            goodsInCart.push(productWithCount);
        };
        console.log(goodsInCart)
        tabWithCounter.dataset.goodsCount = goodsInCart.length;
    };
};
function createProduct(product) {
    return {
        id: product.id,
        name: product.name ? product.name : 'name unknown',
        price: product.price ? product.price : 'price unknown',
        imgSrc: product.imgSrc ? product.imgSrc : 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
    }
};
function addClickListeners(elements, callBack) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener('click', callBack);
    }
}
addClickListeners(tabs, clickHandler);

function renderCart() {
    const container = document.createElement('div');
    container.dataset.activeTabContent = 'true';
    container.className = 'cart-items';

    for (let i = 0; i < goodsInCart.lengt; i++) {
        const product = goodsInCart[i];
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
        <div class="cart-item-title">${product.name}</div>
        <div class="cart-item-count">${product.count}</div>
        <div class="cart-item-price">${product.price}</div>
        `;
        const button = document.createElement('button');
        button.className = 'cart-item-delete';
        button.textContent = 'x';
    cartItem.append(button)
    container.append(cartItem);
    }
    return container;
};
const button = document.querySelectorAll('button.button')
for (let i = 0; i < button.length; i++) {
    const button = button[i];
    button.addEventListener('click', addInCartHandler);
}















// ===========================================================================================
