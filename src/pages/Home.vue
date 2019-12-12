<template>
  <div>
    <h1>Motion Array Sample Home Page</h1>
    <div v-for="user in users" :key="user.id">
      <span>{{user.name}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      users: "users"
    })
  }
};
</script>

<style>
</style>


