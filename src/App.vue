<script>
import axios from 'axios';
import { store } from './data/store'; // Importa lo store
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl) 
        .then(result => {
          this.projects = result.data;
          console.log(result.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  mounted() {
    this.getApi();
  }
};
</script>

<template>
  <div class="container">
    <h1>App</h1>
    <div class="row">
      <div class="col-md-12" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
