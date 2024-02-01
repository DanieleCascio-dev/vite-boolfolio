<script>
export default {
  props: {
    project: Object,
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
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
