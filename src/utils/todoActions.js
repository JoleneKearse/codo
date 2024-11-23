export const addTodo = (array, todo) => {
	const requiredFields = ["id", "title", "completed", "category", "priority"];
	const hasAllFields = requiredFields.every((field) =>
		Object.keys(todo).includes(field)
	);

	const newTitleField = todo.title;

	if (array.length > 0) {
		if (!hasAllFields) {
			return [array];
		}

		if (array.some((task) => task.title === newTitleField)) {
			return [array];
		}

		return [...array, todo];
	} else {
		if (!hasAllFields) {
			return [];
		}

		if (hasAllFields) {
			return [todo];
		}
	}
};

export const viewTodos = (array) => {
	return array;
};

export const filterTodos = (array, key, value) => {
	return array.filter((task) => task[key] === value);
};

export const updateTodo = (array, id, key, valueToUpdate) => {
	return array.map((task) => {
		if (task.id === id) {
			return { ...task, [key]: valueToUpdate };
		};
		return task;
	});
};

export const deleteTodo = (array, id) => {
	return array.filter((task) => task.id !== id);
}
