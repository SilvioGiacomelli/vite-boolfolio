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
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

</style>
