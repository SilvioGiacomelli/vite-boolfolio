<script>
import axios from 'axios';
import { store } from '@/data/store';
import Main from '../../src/components/Main.vue'
import Loader from '../components/partials/Loader.vue'

export default {
  components: {
    Main,
    Loader,
  },
  data() {
    return {
      store,
      loading:true,
      projects: [],
  technologies: [],
  types: [],
    };
  },
  //Il methods serve per fare la chiamata all'api
  methods: {
    getApi(apiUrl, chiusuraUrl = "") {
      axios.get(store.apiUrl + chiusuraUrl) 

        .then(result => {
          this.loading = false

          switch (chiusuraUrl) {
            case 'projects':
              this.store.projects = result.data;
              console.log(result.data);
              break;
            case 'types':
              this.store.types = result.data;
              break;
            case 'technologies':
              this.store.technologies = result.data;
              break;
            }
        })
        .catch(error => {
          console.log(error.message);
          this.loading = false;
        });
    }
  },

  //il metodo mounted serve per fare in modo che la chiamata all'api venga fatta solo una volta
  mounted() {
    this.getApi(store.apiUrl + 'projects');
    this.getApi(store.apiUrl + 'types');
    this.getApi(store.apiUrl + 'technologies');
  },
name: 'Projects',
}
</script>

<template>
<Loader v-if="loading" />
<Main v-if="!loading" />
</template>


<style lang="scss" scoped>
</style>