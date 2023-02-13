// ===========================КНОПКИ ПЕРЕКЛЮЧЕНИЯ ТОВАРЫ\КОРЗИНА=============================

// ============Это работает при наличии соответствующих дата-ид ===========
// const goods = document.querySelector('button[data-id="goods"]');
// const cart = document.querySelector('button[data-id="cart"]');

// function clickHandler(event) {
//     ==========Первый вариант============
//     const id = event.target.dataset.id;
//     if (id === 'goods'){
//         goods.classList.add('active');
//         cart.classList.remove('active');
//     }
//     else if (id ==='cart') {
//         cart.classList.add('active');
//         goods.classList.remove('active');
//     };

//     ==========Второй вариант==============
//     goods.classList.toggle('active');
//     cart.classList.toggle('active');
// };
// goods.addEventListener('click', clickHandler);
// cart.addEventListener('click', clickHandler);


// ==================Решение задачи серез цикл======================
// const tabs = document.querySelectorAll('button[data-id="tab"]')

// for (let i = 0; i < tabs.length; i++) {
//     const tab = tabs[i];
//     tab.addEventListener('click', clickHandler);
// }

// function clickHandler(event) {
//     for (let i = 0; i < tabs.length; i++) {
//         const tab = tabs[i];
//         tab.classList.toggle('active');
//     }
// }


// =====================Третий вариант=================================//

let activeTabId = 'goods';
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
    let html = "";
    if (tabId === 'goods') {
        html = renderGoods();
    } else {
        html = renderCart();
    };
    tabsContainer.insertAdjacentHTML('afterend', html);
};
function renderGoods() {
    return `
    <div class="product-items" data-active-tab-content="true">
    <div class="product-item">
        <div class="image">
            <img src="https://thumb.tildacdn.com/tild3830-6234-4531-b132-326435386466/-/format/webp/product-Bayaband-Fli.jpg" alt="">
        </div>
        <div class="product-list">
            <h3>Crocs Bayaband Flip Navy</h3>
            <p>10$</p>
            <button data-add-in-cart="true" class="button">Add to cart</button>
        </div>
    </div>
    <div class="product-item">
        <div class="image">
            <img src="https://thumb.tildacdn.com/tild3538-3935-4532-a261-376164633666/-/format/webp/e2bc6a9ec99005306921.jpg" alt="">
        </div>
        <div class="product-list">
            <h3>Crocs Crocband™ Clog Navy</h3>
            <p>15$</p>
            <button data-add-in-cart="true" class="button">Add to cart</button>
        </div>
    </div>
    <div class="product-item">
        <div class="image">
            <img src="https://thumb.tildacdn.com/tild3039-6131-4462-b866-316362626661/-/format/webp/product-LiteRide-Clo.jpg" alt="">
        </div>
        <div class="product-list">
            <h3>Crocs LiteRide Clog Black</h3>
            <p>30$</p>
            <button data-add-in-cart="true" class="button">Add to cart</button>
        </div>
    </div>
</div>
    `
};
function renderCart() {
    return `
    <div class="cart-items" data-active-tab-content="true">
    <div class="cart-item">
        <div class="cart-item-title">Crocs Bayaband Flip Navy</div>
        <div class="cart-item-count">3шт.</div>
        <div class="cart-item-price">30$</div>
    </div>
    <div class="cart-item">
        <div class="cart-item-title">Crocs Crocband™ Clog Navy</div>
        <div class="cart-item-count">1штю</div>
        <div class="cart-item-price">15$</div>
    </div>
    <div class="cart-item">
        <div class="cart-item-title">Crocs LiteRide Clog Black</div>
        <div class="cart-item-count">6шт.</div>
        <div class="cart-item-price">180$</div>
    </div>
</div>
    `;
};

//--------------------------//
const goodsInCart = [];
const addInCartButtons = document.querySelectorAll('button[data-add-in-cart="true"]');
const tabWithCounter = document.querySelector('button[data-goods-count="0"]');

for (let i = 0; i < addInCartButtons.length; i++) {
    const button = addInCartButtons[i];

    button.addEventListener('click', addInCartHandler);
}

function addInCartHandler() {
    // goodsInCart[goodsInCart.length]= 'g'; Интересный вариант, но костыльный.
    const product = createProduct();
    goodsInCart.push(product);
    tabWithCounter.dataset.goodsCount = goodsInCart.length;
};



function createProduct() {
    return {
        name: 'crocs',
        price: 10,
    }
};

function addClickListeners(elements, callBack) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener('click', callBack);
    }
}


addClickListeners(tabs, clickHandler);
 addClickListeners(addInCartButtons, addInCartHandler);


















// ===========================================================================================
