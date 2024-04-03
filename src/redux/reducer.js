import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "./actions";
import { initalState } from "./initial-state";
import shortid from "shortid";

function saveTOLocalStorage(state) {
    window.localStorage.setItem("MyTODOS", JSON.stringify(state));
}

function reducer(state=initalState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { title } = action.payload;

            const newState = {
                ...state,
                todos: [...state.todos,
                {
                    id : shortid(),
                    title,
                    completed: false,
                    important: false
                },
                ],
            };
        saveTOLocalStorage(newState);
        return newState;
    }

        case TOGGLE_COMPLETED: { 
            const newTodos = state.todos.map(todo=>{
                if(todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            
            const newState = {
                ...state,
                todos: newTodos,
            }
            saveTOLocalStorage(newState);
            return newState;
        }
        
        case DELETE_TODO: {

            const  { id } = action.payload;

            const newTodos = state.todos.filter((todo)=> todo.id != id);

            const newState = {
                ...state,
                todos: newTodos,
            }

            saveTOLocalStorage(newState);
            return newState;
        }

        case TOGGLE_IMPORTANT: {
            const newTodos = state.todos.map(todo=>{
                if(todo.id === action.payload.id) {
                    todo.important = !todo.important;
                }
                return todo;
            });
            
            const newState = {
                ...state,
                todos: newTodos,
            }

            saveTOLocalStorage(newState);
            return newState;
        }

        default:
        return state;
    }
}

export default reducer;