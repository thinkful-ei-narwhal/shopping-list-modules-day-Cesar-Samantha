import item from './item.js';

const items= [];
let hideCheckedItems= false;

const findById = function (id){
    const foundItem = this.items.find(item => item.id === id);
    return foundItem;
}

const addItem = function (name){
    try{
    item.validateName(name);
    this.items.push(item.create(name));
    }catch(error){
        console.log(`Cannot update name: ${error.message}`);
     }
}

const findAndToggleChecked = function (id){
    const foundItem =this.findById(id);
    foundItem.checked = !foundItem.checked;
}

const findAndUpdateName = function (id, newName){
    try{
        item.validateName(newName);
        const items = this.findById(id);
        items.name = newName;
    }catch(error){
       console.log(`Cannot update name: ${error.message}`);
    }
}

const findAndDelete = function (id){
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}


export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };