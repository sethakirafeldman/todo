const toDoFactory = (title, description, entry, dueDate, priority, notes, checklist) => {
        return {
            title: title,
            description: description,
            entry: entry,
            dueDate: dueDate,
            priority: priority,
            notes: notes,
            checklist: checklist,

            // taskEntries.push(entries)
    };
};

// const testCase = toDoFactory("first list item", "this is first");
// console.log(testCase.title)



//https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern



export { toDoFactory }