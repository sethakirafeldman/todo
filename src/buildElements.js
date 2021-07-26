const elFactory = (type, parent, id, text/*attributes, child*/) => {
    const build = () => {
        let el = document.createElement(type);
        let appendAble = document.getElementById(parent);
        el.id = id;
        el.innerText = text;
        appendAble.append(el);
    };

    return {
        type,
        parent,
        id,
        build
    }

    };

const textContent = {
    main: "" ,
    title: "To Doer-er",
    subtitle: "The To Do list for only the doiest!"

};

//type, parent, id, text .

const containerGen = elFactory('div', 'main', "container",textContent.main);
const titleGen = elFactory('div', 'container', "title",textContent.title);
const subGen = elFactory("p", 'title', "subtitle", textContent.subtitle);


containerGen.build();
titleGen.build();
subGen.build();


export {elFactory}