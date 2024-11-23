import { describe, it, expect } from "vitest";
import { addTodo, viewTodos, filterTodos, updateTodo, deleteTodo } from "./todoActions";

describe("add todo", () => {
  it("should add a todo to an empty todo array", () => {
    const newtodo = {
      id: 1,
      title: "todo 1",
      completed: false,
      category: "home",
      priority: "high",
    };
    const result = addTodo([], newtodo);
    expect(result).toEqual([newtodo]);
  });

  it("should not add an empty todo to an empty todo array", () => {
    const result = addTodo([], {});
    expect(result).toEqual([]);
  });

  it("should not add a todo with missing fields to an empty todo array", () => {
    const newtodo = {
      id: 1,
      title: "todo 1",
      completed: false,
    };
    const result = addTodo([], newtodo);
    expect(result).toEqual([]);
  });

  it("should add new todo to an existing todo array", () => {
    const existingtodos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
    ];
    const newtodo = {
      id: 2,
      title: "todo 2",
      completed: false,
      category: "work",
      priority: "low",
    };
    const result = addTodo(existingtodos, newtodo);
    expect(result).toEqual([...existingtodos, newtodo]);
  });

  it("should only add a new todo to an existing array if all fields are present", () => {
    const existingtodos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
    ];
    const newtodo = {
      id: 2,
      title: "todo 2",
      completed: false,
    };
    const result = addTodo(existingtodos, newtodo);
    expect(result).toEqual([existingtodos]);
  });

  it("should not add a todo with the same title", () => {
    const existingtodos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
    ];
    const newtodo = {
      id: 2,
      title: "todo 1",
      completed: false,
      category: "work",
      priority: "low",
    };
    const result = addTodo(existingtodos, newtodo);
    expect(result).toEqual([existingtodos]);
  });
});

describe("view todos", () => {
  it("should read all todos", () => {
    const todos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "todo 2",
        completed: false,
        category: "work",
        priority: "low",
      },
    ];
    const result = viewTodos(todos);
    expect(result).toEqual(todos);
  });

  it("should not read todos if the array is empty", () => {
    const result = viewTodos([]);
    expect(result).toEqual([]);
  });
});

describe("filter todos", () => {
  it("should return all non-completed todos", () => {
    const todos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "todo 2",
        completed: true,
        category: "work",
        priority: "low",
      },
    ];
    const result = filterTodos(todos, "completed", false);
    expect(result).toEqual([todos[0]]);
  });

  it("should return all todos in the home category", () => {
    const todos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "todo 2",
        completed: true,
        category: "work",
        priority: "low",
      },
    ];
    const result = filterTodos(todos, "category", "home");
    expect(result).toEqual([todos[0]]);
  });
});

describe("update todos", () => {
  const todos = [
    {
      id: 1,
      title: "todo 1",
      completed: false,
      category: "home",
      priority: "high",
    },
  ];

  it("should update the title of a todo", () => {
    const updatedtodo = {
      id: 1,
      title: "todo 1 updated",
      completed: false,
      category: "home",
      priority: "high",
    };
    const result = updateTodo(todos, 1, "title", "todo 1 updated");
    expect(result).toEqual([updatedtodo]);
  });

  it("should update the category of a todo", () => {
    const updatedtodo = {
      id: 1,
      title: "todo 1",
      completed: false,
      category: "work",
      priority: "high",
    };
    const result = updateTodo(todos, 1, "category", "work");
    expect(result).toEqual([updatedtodo]);
  });

  it("should update the priority of a todo", () => {
    const updatedtodo = {
      id: 1,
      title: "todo 1",
      completed: false,
      category: "home",
      priority: "low",
    };
    const result = updateTodo(todos, 1, "priority", "low");
    expect(result).toEqual([updatedtodo]);
  });

  it("should update completed status of a todo", () => {
    const updatedtodo = {
      id: 1,
      title: "todo 1",
      completed: true,
      category: "home",
      priority: "high",
    };
    const result = updateTodo(todos, 1, "completed", true);
    expect(result).toEqual([updatedtodo]);
  });

  it("should not update a todo if the id does not match", () => {
    const result = updateTodo(todos, 2, "title", "todo 1 updated");
    expect(result).toEqual(todos);
  });

  it("should not update a todo that does not exist", () => {
    const result = updateTodo(todos, 2, "title", "todo 2");
    expect(result).toEqual(todos);
  });
});

describe("delete todos", () => {
  it("should delete a todo", () => {
    const todos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "todo 2",
        completed: false,
        category: "work",
        priority: "low",
      },
    ];
    const result = deleteTodo(todos, 1);
    expect(result).toEqual([todos[1]]);
  });

  it("should not delete a todo if the id does not match", () => {
    const todos = [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        category: "home",
        priority: "high",
      },
      {
        id: 2,
        title: "todo 2",
        completed: false,
        category: "work",
        priority: "low",
      },
    ];
    const result = deleteTodo(todos, 3);
    expect(result).toEqual(todos);
  });
});