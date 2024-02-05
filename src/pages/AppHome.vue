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
      page: 1,
      lastPage: 3,
    };
  },
  created() {
    this.load = true;
    this.getProjects(this.page),
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
  methods: {
    getProjects(pageNum) {
      this.page = pageNum;
      axios
        .get(`${this.store.baseUrl}api/projects`, {
          params: {
            page: pageNum,
          },
        })
        .then((resp) => {
          // console.log(resp);
          this.projects = resp.data.results.data;
          // console.log(this.projects);
          this.lastPage = resp.data.results.last_page;
          // console.log(this.lastPage);
        });
    },
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <h2>Here you can find all the project</h2>
    <div v-if="load">Loading...</div>
    <div v-else class="row g-3 mb-3">
      <div class="col-4" v-for="project in projects">
        <AppCard :project="project" :types="types" />
      </div>
    </div>
    <!-- Pagination -->
    <div class="d-flex gap-3">
      <button class="btn btn-primary" @click="getProjects(this.page - 1)">
        Prev
      </button>
      <button class="btn btn-primary" @click="getProjects(this.page + 1)">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
