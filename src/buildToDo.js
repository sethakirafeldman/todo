const toDoFactory = (title, description, entry, dueDate, priority, notes, status) => {

        return {
            title: title,
            description: description,
            entry: entry,
            dueDate: dueDate,
            priority: priority,
            notes: notes,
            status: status

            // taskEntries.push(entries)
    };
};

export { toDoFactory }