<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
name: 'ProjectDetail',
data(){
  return{
    store,
  };
},
methods:{
  getApi(){
    const slug = this.$route.params.slug;
    axios.get(store.apiUrl + 'projects_by_slug/' + slug)
    .then(result => {
      console.log(result.data);
    })
    .catch(error=>{
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
    <h2>Ciao
    </h2>
  </div>
</template>


<style lang="scss" scoped>

</style>