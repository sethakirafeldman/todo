const elFactory = (type, parent/*attributes, child*/) => {
    return {
        type: type,
        parent: parent
    };

    // let element = document.createElement(type);
    // let parent = document.getElementsByName(parent);
    // document.body.append(element);
    // return element ;
};

let firstEl = elFactory('div', 'body');
console.log(firstEl.type);




export {elFactory}