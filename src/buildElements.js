const domFactory = (type, parent/*attributes, child*/) => {
    let element = document.createElement(type);
    let parent = document.getElementsByName(parent);
    document.parent.append(element);
    return element ;
};

let firstEl = domFactory("div", "body");
console.log(firstEl.type);




export {domFactory}