const toDoFactory = (title, description, dueDate, priority, notes, checklist) => {

    const toDo = () => {
        const consoleTest () =>console.log("testtest");
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            notes: notes,
            checklist: checklist,
        };
    };

};

//https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern


const testCase = toDoFactory("first list item", "this is first");

export { default }