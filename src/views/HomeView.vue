<template>
  <p>Vuex</p>
  <div class="app">
    <NavBar />
    <Todo />
    <StatusBarVue />
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "../components/Todos.vue";
import NavBar from "../components/NavBar.vue";
import StatusBarVue from "@/components/StatusBar.vue";
export default {
  name: "HomeView",
  components: { Todo, NavBar, StatusBarVue },
};
</script>
<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
