<template>
  <div class="todo-list">
    <ul v-if="auth.isAuthenticated">
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <p v-else>Bạn chưa đăng nhập</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TodoList",
  computed: mapState(["todos", "auth"]),
};
</script>

<style scoped>
todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
  text-align: start;
  list-style: none;
}

.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
}

.todo-list li button {
  float: right;
  margin-right: 20px;
}

.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}

.todo-list li.completed {
  background: rgb(119, 218, 243);
}

*** TodoForm.vue form {
  padding: 10px;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  border: 0;
}

input[type="submit"] {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}

*** ProgressBar.vue .progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}

*** StatusBar.vue .status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
