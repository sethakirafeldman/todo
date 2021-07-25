const elFactory = (type, parent, title/*attributes, child*/) => {
    const build = () => {
        let el = document.createElement(type);
        let appendAble = document.getElementById(parent);
        el.id = title;
        el.innerText = "testesttest";
        appendAble.append(el);
        console.log(type, parent + "awesae");
    };

    return {
        type,
        parent,
        title,
        build
    }

    };

    // let element = document.createElement(type);
    // let parent = document.getElementsByName(parent);
    // document.body.append(element);
    // return element ;

const firstEl = elFactory('div', 'main', "div1");
const secondEl = elFactory("h2", 'div1', "test2" );

firstEl.build();
secondEl.build();


export {elFactory}