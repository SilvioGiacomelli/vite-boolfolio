<script>
import { store } from '../data/store';
import ProjectCard from './partials/ProjectCard.vue';

export default {
  components:{
    ProjectCard,
  },
  data(){
    return{
      store,
    };
  },
}
</script>

<template>
  <div>
    <ProjectCard v-for="project in store.projects" :key="project.id" :project="project"/>
  </div>
</template>


<style lang="scss" scoped>

</style>