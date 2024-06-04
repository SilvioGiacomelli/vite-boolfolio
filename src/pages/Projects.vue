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

    };
  },
  //Il methods serve per fare la chiamata all'api
  methods: {
    getApi(apiUrl, urlTail = "") {
      axios.get(store.apiUrl + urlTail) 

        .then(result => {
          this.loading = false

          switch (urlTail) {
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
    this.getApi(store.apiUrl, 'projects');
    this.getApi(store.apiUrl, 'types');
    this.getApi(store.apiUrl, 'technologies');
  },
name: 'Projects',
}
</script>

<template>
<Loader v-if="loading" />
<div class="technologies_tab">
  <span v-for="type in store.types" :key="`t-${type.id}`" class="badge bg-black">{{ type.title }}</span>
</div>
<div class="types_tab">
  <span v-for="technology in store.technologies" :key="`t-${technology.id}`" class="badge bg-warning text-black">{{ technology.title }}</span>
</div>
<Main v-if="!loading" />
</template>


<style lang="scss" scoped>
</style>