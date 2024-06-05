<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
    },
    type: {
      type: Object,
    },
    technology: {
      type: Object,
    },
  },
  methods: {
    getImageUrl(image) {
      return (`@/assets/${image}`);
    }
  }
};
</script>

<template>
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <a :href="project.url" class="btn btn-primary">Go to project</a>
      <span v-for="technology in projectTechnologies" :key="`t-${technology.id}`" class="badge bg-black">{{ technology.title }}</span>
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

</style>
