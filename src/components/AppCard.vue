<script>
export default {
  props: {
    project: Object,
    types: Object,
  },
  data() {
    return {};
  },
  methods: {
    truncate(text) {
      if (text.length > 200) {
        text = text.substring(0, 200) + "...";
      }
      return text;
    },
  },
  /* computed: {
    truncate() {
      if (this.project.description.length > 200) {
       return this.project.description.length =
          this.project.description.substring(0, 200) + "...";
      }
      return this.project.description
    }, 
  },*/
};
</script>

<template>
  <div class="card h-100" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        <strong>Description: </strong>
        {{ truncate(project.description) }}
      </p>
      <h4>
        Type:

        <span v-for="type in types">
          <span v-if="type.id == project.type_id">
            {{ type.name }}
          </span>
        </span>
      </h4>

      <h4>Tehcnologies:</h4>
      <ul>
        <div v-for="technology in project.technologies" :key="technology.id">
          <li>{{ technology.name }}</li>
        </div>
      </ul>

      <router-link
        class="btn btn-primary"
        :to="{ name: 'show', params: { slug: project.slug } }"
        >Details</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
