<template>
  <div class="project-card">
    <h2>{{ project.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
}
</style>
