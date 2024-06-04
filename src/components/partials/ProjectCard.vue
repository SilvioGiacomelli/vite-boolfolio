<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
    }
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
      <img v-for="(image, index) in project.images" :key="index" :src="getImageUrl(image)" :alt="`Image ${index + 1}`">
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

</style>
