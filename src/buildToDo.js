const toDoFactory = (title, description, dueDate, priority, notes, checklist) => {
    console.log("testtest");
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            notes: notes,
            checklist: checklist,
    };

};

const testCase = toDoFactory("first list item", "this is first");
console.log(testCase.title)



//https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern



export { toDoFactory }