const initialState = [];

const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const LOAD_TODOS = "todos/LOAD_TODOS"; // 추가된 부분

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const loadTodos = (payload) => {
  return {
    type: LOAD_TODOS,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_STATUS_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case LOAD_TODOS: // 추가된 부분
      return action.payload;
    default:
      return state;
  }
};

export default todos;
