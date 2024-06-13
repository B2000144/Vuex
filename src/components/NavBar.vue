<template>
  <div class="navbar">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="auth.isAuthenticated">
        Total todos :{{ todos ? todos.length : 0 }}
        <button>Đăng xuất</button>
      </li>
      <button v-else>Đăng nhập</button>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  computed: mapState(["todos", "auth"]),
};
</script>

<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
