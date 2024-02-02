<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      load: false,
      curProject: null,
    };
  },
  created() {
    this.load = true;
    console.log(this.$route.params.slug);
    axios
      .get(`${this.store.baseUrl}api/projects/${this.$route.params.slug}`)
      .then((resp) => {
        console.log(resp);
        this.curProject = resp.data.results;
        console.log(this.curProject);
      })
      .finally(() => {
        this.load = false;
      });
    console.log(this.$route.params.slug);
  },
};
</script>

<template>
  <div class="container">
    <h2 v-if="load">Loading...</h2>
    <div v-else>
      <h2>Here you can find the detail of the projects</h2>
      <h3>{{ curProject.title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
