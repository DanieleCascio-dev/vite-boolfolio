<script>
import axios from "axios";
export default {
  data() {
    return {
      base_url: "http://127.0.0.1:8000/",
      projects: [],
    };
  },
  created() {
    axios.get(`${this.base_url}api/projects`).then((resp) => {
      this.projects = resp.data.results;
      console.log(this.projects);
      console.log(resp);
    });
  },
};
</script>

<template>
  <div class="container">
    <h2>Here you can find all the project</h2>
    <div class="row">
      <div class="col-4">
        <div v-for="project in projects">
          <p>{{ project.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
