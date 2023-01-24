import { APP_KEY, ADD_TODO, REMOVE_TODO } from '../constant/Constant'

// Initial state: load from localStorage OR create empty one
export const initialState = {
  todos: JSON.parse(localStorage.getItem(APP_KEY)) || []
};

// Reducer
const reducer = (state, action) => {

  let _todos;

  switch (action.type) {

    case ADD_TODO:
      console.log(ADD_TODO, state.todos, action.payload);
      _todos = [...state.todos, action.payload];
      localStorage.setItem(APP_KEY, JSON.stringify(_todos));
      return {
        ...state,
        todos: _todos
      };

    case REMOVE_TODO:
      console.log(REMOVE_TODO, state.todos, action.payload);
      _todos = [...state.todos];
      const index = _todos.indexOf(action.payload);
      console.log(REMOVE_TODO, "index:", index, "element:", _todos[index]);
      _todos.splice(index, 1);
      console.log(REMOVE_TODO, "todos:", _todos);
      localStorage.setItem(APP_KEY, JSON.stringify(_todos));
      return {
        ...state,
        todos: _todos
      };

    default:
      console.log(ADD_TODO, state.todos, action.payload);
      return state;

  }

};

export default reducer