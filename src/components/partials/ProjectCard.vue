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
      <p class="card-text">{{ project.description }}</p>
      <h5 class="card-title">
        {{ project.title }}
      </h5>
      <router-link :to="{name:'projectDetail', params:{slug: project.slug}}" class="btn btn-primary">View Project
      </router-link>
      <span v-for="technology in projectTechnologies" :key="`t-${technology.id}`" class="badge bg-black">{{ technology.title }}</span>
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

</style>
