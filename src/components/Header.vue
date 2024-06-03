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
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contacts">Contact</a></li>
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