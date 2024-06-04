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
      loading:true
    };
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl + 'projects') 

        .then(result => {
          this.store.projects = result.data;
          console.log(result.data);
          this.loading = false
        })
        .catch(error => {
          console.log(error.message);
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getApi();
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