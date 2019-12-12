<template>
  <div>
    <h1>Motion Array Sample Project</h1>
    <span v-if="isUserAvailable">{{user.name}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      users: "users"
    }),
    isUserAvailable() {
      let user = this.users[0];
      for (var key in user) {
        if (user.hasOwnProperty(key)) return true;
      }
      return false;
    },
    user() {
      return this.users[0];
    }
  }
};
</script>

<style>
</style>


