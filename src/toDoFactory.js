const toDoFactory = (title, description, entry, dueDate, project, priority, status) => {

        return {
            title: title,
            description: description,
            entry: entry,
            dueDate: dueDate,
            project: project,
            priority: priority,
            status: status
    };
};

export { toDoFactory }

