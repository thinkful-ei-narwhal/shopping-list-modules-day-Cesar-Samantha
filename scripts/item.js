
const  validateName = function(name){
if(name == '' || name === undefined){
    throw new TypeError('Name must not be blank');
    }
}

const create = function (name){
   let item= {
       id: cuid(),
       name: name,
       checked: false
    }
    return item;
}

export default {
    validateName,
    create
};
