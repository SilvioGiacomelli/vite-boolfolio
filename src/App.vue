<script>

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
components:{
  Header,
  Footer,
},
data(){
  return{
  };
},
methods:{
},
mounted() {
}
}

</script>

<template>
  <div class="main-wrapper">
<div class="container-fluid header-nav">
  <Header/> 
</div>
<div class="container">
  <router-view></router-view>
</div>
<div class="container">
  <Footer/>
</div>


  </div>
</template>

<style lang="scss" scoped>
</style>
