<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';


export default {
    components: {
      Navbar,
      Header,
    }
}
</script>

<style lang="scss">

</style>
