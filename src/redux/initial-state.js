export const initalState = JSON.parse(window.localStorage.getItem("MyTODOS")) || {
    todos: [{
        id: 0,
        title: "Buy Milk",
        completed: false,
        important: false,
    },
    {
        id: 1,
        title: "Buy Medicines",
        completed: true,
        important: true,
    },
    {
        id: 2,
        title: "Mock Shyam",
        completed: false,
        important: true,
    },
    {
        id: 3,
        title: "Update Resume",
        completed: true,
        important: false,
    },
    ],
};