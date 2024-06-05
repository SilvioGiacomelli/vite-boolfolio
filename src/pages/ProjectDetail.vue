<script>
import { store } from '../data/store';
import axios from 'axios';
import Main from '../components/Main.vue';
import Loader from '../components/partials/Loader.vue';

export default {
  components:{
    Main,
    Loader,
  
  },
name: 'ProjectDetail',
data(){
  return{
    store,
    project:{},
    loading:true
  };
},
methods:{
  getApi(){
    const slug = this.$route.params.slug;
    axios.get(store.apiUrl + 'projects_by_slug/' + slug)
    .then(result => {
      this.loading = false;
      console.log(result.data);
      this.project=result.data.project;
    })
    .catch(error=>{
      this.loading = false;
      console.log(error.message);
    })
  }
},
mounted(){
  this.getApi();
}
}
</script>

<template>
  <div>
    <h2>Project Detail</h2>
    <Loader v-if="loading" />
    <div v-else>
      <h3>{{project.title}}</h3>
      <p class="text">{{project.description}}</p>
      <h4>Technologies</h4>
      <ul>
        <li v-for="(technology, index) in project.technologies" :key="index" class="btn btn-warning">{{ technology.title }}</li>
      </ul>
      <h4>Types</h4>
      <ul>
        <li v-for="(type, index) in project.types" :key="index">{{ type.title }}</li>
      </ul>
      <img :src="project.image">

  </div>
  </div>
</template>


<style lang="scss" scoped>

</style>