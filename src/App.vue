<script>
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },
  components: { AppMain },
};
</script>

<template>
  <h2>Main page</h2>
  <AppMain />
</template>

<style lang="scss">
@use "../style/general.scss" as *;
</style>
