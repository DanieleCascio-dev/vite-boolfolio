<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      projects: [],
      types: [],
      load: false,
    };
  },
  created() {
    this.load = true;
    axios.get(`${this.store.baseUrl}api/projects`).then((resp) => {
      this.projects = resp.data.results;
      console.log(this.projects);
    });
    axios
      .get(`${this.store.baseUrl}api/types`)
      .then((resp) => {
        this.types = resp.data.results;
        /* console.log(resp);
      console.log(this.types); */
      })
      .finally(() => {
        this.load = false;
      });
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <h2>Here you can find all the project</h2>
    <div v-if="load">Loading...</div>
    <div v-else class="row g-3">
      <div class="col-4" v-for="project in projects">
        <AppCard :project="project" :types="types" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
