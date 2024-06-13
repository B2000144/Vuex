import { createStore } from "vuex";

const storeData = {
  state: {
    todos: [
      { id: 1, title: "viec 1", completed: true },
      { id: 2, title: "viec 2", completed: false },
      { id: 3, title: "viec 3", completed: false },
    ],
    auth: {
      isAuthenticated: true,
    },
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    // doneTodos: state => state.todos.filter((todo) => todo.completed); cach 2
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
  },
};

const store = createStore(storeData);

export default store;
