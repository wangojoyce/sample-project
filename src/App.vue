<template>
  <v-app id="”app”">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getUsers");
  }
};
</script>

<style>
</style>
