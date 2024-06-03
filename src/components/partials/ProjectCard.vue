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

<template>
  <div class="project-card card">
    <h2>{{ project.title }}</h2>
  </div>
</template>

<style lang="scss" scoped>

</style>
