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


// =====================Третий вариант=================================

let activeTabId = 'goods';
const initialTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`);
initialTab.classList.add('active');

const tabs = document.querySelectorAll('button.tab');

function clickHandler(event) {
    const activeTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`);

    activeTab.classList.remove('active');
    event.target.classList.add('active');
    activeTabId = event.target.dataset.tabId;
};

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    tab.addEventListener('click', clickHandler);
}
