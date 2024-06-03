<script>
import axios from 'axios';
import { store } from './data/store'; 
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Footer from './components/partials/Footer.vue';

export default {
  components: {
    Main,
    Header,
    Footer
  },
  data() {
    return {
      store,
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
  }
};
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style lang="scss" scoped>
</style>
