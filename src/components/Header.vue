<script>
export default {
  setup () {
    

    return {}
  }
}
</script>
<template>
  <header>
    <nav>
      <h2>Header</h2>
      <ul>
        <li><router-link :to="{name:'home'}">Home</router-link></li>
        <li><router-link :to="{name:'projects'}">Projects</router-link></li>
        <li><router-link :to="{name:'about'}">About</router-link></li>
        <li><router-link :to="{name:'contacts'}">Contact</router-link></li>
      </ul>
    </nav>

  </header>
</template>


<style lang="scss" scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  nav{
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
    }
  li{
    display: inline;
    margin: 0 10px;
    a{
      color: white;
      text-decoration: none;}
  }
}
}
</style>