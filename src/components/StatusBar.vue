<template>
  <div class="status-bar" v-if="auth.isAuthenticated">
    <p>Hoàn thành</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "StatusBar",
  computed: {
    ...mapGetters(["doneTodos"]),
    ...mapState(["auth"]),
  },
};
</script>

<style scoped>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
