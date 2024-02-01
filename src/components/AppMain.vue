<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      base_url: "http://127.0.0.1:8000/",
      projects: [],
      types: [],
    };
  },
  created() {
    axios.get(`${this.base_url}api/projects`).then((resp) => {
      this.projects = resp.data.results;
      console.log(this.projects);
    });
    axios.get(`${this.base_url}api/types`).then((resp) => {
      this.types = resp.data.results;
      /* console.log(resp);
      console.log(this.types); */
    });
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <h2>Here you can find all the project</h2>
    <div class="row g-3">
      <div class="col-4" v-for="project in projects">
        <AppCard :project="project" :types="types" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
