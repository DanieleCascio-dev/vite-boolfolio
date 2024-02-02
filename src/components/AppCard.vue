<script>
export default {
  props: {
    project: Object,
    types: Object,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="card h-100" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        <strong>Description: </strong>
        {{ project.description }}
      </p>

      <div v-for="type in types">
        <div v-if="type.id == project.type_id">
          Type:
          {{ type.name }}
        </div>
      </div>
      <h4>Tehcnologies:</h4>
      <ul>
        <div v-for="technology in project.technologies" :key="technology.id">
          <li>{{ technology.name }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
