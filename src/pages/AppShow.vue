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
        if (resp.data.success) {
          this.curProject = resp.data.results;
          console.log(this.curProject);
        } else {
          this.$router.push({ name: "not-found" });
          console.log("not found");
        }
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
      <h2 class="mb-3">Here you can find the detail of the single project</h2>
      <h3>{{ curProject.title }}</h3>
      <div class="d-flex">
        <strong>Techs: </strong>

        <ul class="_list d-flex gap-3">
          <li
            :style="{ 'background-color': tech.hex_color }"
            v-for="tech in curProject.technologies"
          >
            {{ tech.name }}
          </li>
        </ul>
      </div>

      <p><strong>Description: </strong>{{ curProject.description }}</p>

      <p v-if="curProject.type">
        <strong>Type: </strong>{{ curProject.type.name }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
._list {
  list-style-type: none;
  padding-left: 8px;
}
</style>
