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
};

const store = createStore(storeData);

export default store;
