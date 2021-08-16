

const toDoFactory = (title, description, entry, dueDate, project, notes, status) => {

        return {
            title: title,
            description: description,
            entry: entry,
            dueDate: dueDate,
            project: project,
            notes: notes,
            status: status
    };
};

export { toDoFactory }

