import store from './store.js';
import shoppingList from './shopping-list.js';
import item from './item.js';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);