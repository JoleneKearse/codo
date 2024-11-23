import { describe, it, expect } from "vitest";
import { addTodo, viewTodos, filterTodos, updateTodo, deleteTodo } from "./todoActions";

describe("add task", () => {
  it("should add a task to an empty todo array", () => {
    const newTask = {
      id: 1,
      title: "task 1",
      completed: false,
      category: "home",
      priority: "high",
    };
    const result = addTodo([], newTask);
    expect(result).toEqual([newTask]);
  });

  it("should not add an empty task to an empty todo array", () => {
    const result = addTodo([], {});
    expect(result).toEqual([]);
  });

  it("should not add a task with missing fields to an empty todo array", () => {
    const newTask = {
      id: 1,
      title: "task 1",
      completed: false,
    };
    const result = addTodo([], newTask);
    expect(result).toEqual([]);
  });

  it("should add new task to an existing todo array", () => {
    const existingTasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
    ];
    const newTask = {
      id: 2,
      title: "task 2",
      completed: false,
      category: "work",
      priority: "low",
    };
    const result = addTodo(existingTasks, newTask);
    expect(result).toEqual([...existingTasks, newTask]);
  });

  it("should only add a new task to an existing array if all fields are present", () => {
    const existingTasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
    ];
    const newTask = {
      id: 2,
      title: "task 2",
      completed: false,
    };
    const result = addTodo(existingTasks, newTask);
    expect(result).toEqual([existingTasks]);
  });

  it("should not add a task with the same title", () => {
    const existingTasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
    ];
    const newTask = {
      id: 2,
      title: "task 1",
      completed: false,
      category: "work",
      priority: "low",
    };
    const result = addTodo(existingTasks, newTask);
    expect(result).toEqual([existingTasks]);
  });
});

describe("view tasks", () => {
  it("should read all tasks", () => {
    const tasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "task 2",
        completed: false,
        category: "work",
        priority: "low",
      },
    ];
    const result = viewTodos(tasks);
    expect(result).toEqual(tasks);
  });

  it("should not read tasks if the array is empty", () => {
    const result = viewTodos([]);
    expect(result).toEqual([]);
  });
});

describe("filter tasks", () => {
  it("should return all non-completed tasks", () => {
    const tasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "task 2",
        completed: true,
        category: "work",
        priority: "low",
      },
    ];
    const result = filterTodos(tasks, "completed", false);
    expect(result).toEqual([tasks[0]]);
  });

  it("should return all tasks in the home category", () => {
    const tasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "task 2",
        completed: true,
        category: "work",
        priority: "low",
      },
    ];
    const result = filterTodos(tasks, "category", "home");
    expect(result).toEqual([tasks[0]]);
  });
});

describe("update tasks", () => {
  const tasks = [
    {
      id: 1,
      title: "task 1",
      completed: false,
      category: "home",
      priority: "high",
    },
  ];

  it("should update the title of a task", () => {
    const updatedTask = {
      id: 1,
      title: "task 1 updated",
      completed: false,
      category: "home",
      priority: "high",
    };
    const result = updateTodo(tasks, 1, "title", "task 1 updated");
    expect(result).toEqual([updatedTask]);
  });

  it("should update the category of a task", () => {
    const updatedTask = {
      id: 1,
      title: "task 1",
      completed: false,
      category: "work",
      priority: "high",
    };
    const result = updateTodo(tasks, 1, "category", "work");
    expect(result).toEqual([updatedTask]);
  });

  it("should update the priority of a task", () => {
    const updatedTask = {
      id: 1,
      title: "task 1",
      completed: false,
      category: "home",
      priority: "low",
    };
    const result = updateTodo(tasks, 1, "priority", "low");
    expect(result).toEqual([updatedTask]);
  });

  it("should update completed status of a task", () => {
    const updatedTask = {
      id: 1,
      title: "task 1",
      completed: true,
      category: "home",
      priority: "high",
    };
    const result = updateTodo(tasks, 1, "completed", true);
    expect(result).toEqual([updatedTask]);
  });

  it("should not update a task if the id does not match", () => {
    const result = updateTodo(tasks, 2, "title", "task 1 updated");
    expect(result).toEqual(tasks);
  });

  it("should not update a task that does not exist", () => {
    const result = updateTodo(tasks, 2, "title", "task 2");
    expect(result).toEqual(tasks);
  });
});

describe("delete tasks", () => {
  it("should delete a task", () => {
    const tasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "task 2",
        completed: false,
        category: "work",
        priority: "low",
      },
    ];
    const result = deleteTodo(tasks, 1);
    expect(result).toEqual([tasks[1]]);
  });

  it("should not delete a task if the id does not match", () => {
    const tasks = [
      {
        id: 1,
        title: "task 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "task 2",
        completed: false,
        category: "work",
        priority: "low",
      },
    ];
    const result = deleteTodo(tasks, 3);
    expect(result).toEqual(tasks);
  });
});