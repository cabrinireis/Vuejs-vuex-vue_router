<template>
  <div id="app">
    <!-- <div class="area"> -->
     
    <!-- <Search/> -->
    <!-- <Result/>
    </div> -->
    <router-view ></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
// import Search from './components/Search'
// import Result from './components/Result'

export default {
  name: 'App',
  data() {
    return {
      routes: routes
    }
  },
  // components: {
  //   // Search,
  //   Result
  // }
}
</script>

<style scoped>

@import './assets/css/reset.css';

#app {
  height: 100vh;
}
</style>