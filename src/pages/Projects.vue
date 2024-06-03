<script>
import axios from 'axios';
import { store } from '@/data/store';
import Main from '../../src/components/Main.vue'

export default {
  components: {
    Main,
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl) 

        .then(result => {
          this.store.projects = result.data;
          console.log(result.data);
        })
        .catch(error => {
          console.log(error.message);
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
<Main />
</template>


<style lang="scss" scoped>

</style>